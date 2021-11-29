import { useEffect, useState, MouseEvent } from 'react'
import { AxiosResponse } from 'axios'
import { Container, CssBaseline, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { getChannels } from '../api/channels'
import Player, { SourceProps } from '../components/Player'
import Channels from '../components/Channels'

export type Channel = {
  category: string | null
  countries: { code: string, name: string }[]
  languages: { code: string, name: string }[]
  logo: string | null
  name: string | null
  tvg: {
    id: string | null,
    name: string | null,
    url: string | null,
  }
  url: string
}

const HomePage = () => {
  const [url, setUrl] = useState<string | string[] | SourceProps[] | MediaStream>(
    'https://ott-linear-channels.stingray.com/v1/manifest/734895816ccb1e836f8c1e81f772244d9be0077c/128/b058ef41-e048-4d2b-b511-c4f2004d5698/0.m3u8'
  )
  const [channelName, setChannelName] = useState<string>('412 Stingray Everything 80s')
  const [categories, setCategories] = useState<string[]>([''])
  const [languages, setLanguages] = useState<string[]>([''])
  const [alignment, setAlignment] = useState<string>('cate')
  const [cateChan, setCateChan] = useState<Map<any, any>>(new Map())
  const [langChan, setLangChan] = useState<Map<any, any>>(new Map())

  const [choices, setChoices] = useState<string[]>([''])
  const [channels, setChannels] = useState<Map<any, any>>(new Map())

  useEffect(() => {
    let initCategories: string[] = []
    let initLanguages: string[] = []
    getChannels().then((res: AxiosResponse) => {
      if (res.status !== 200) {
        alert('error')
      }
      const channels = res.data

      channels.map((item: Channel, index: number) => {
        return item
      })

      let categoriesM = new Map()
      let languagesM = new Map()

      for (let i = 0; i < channels.length; i++) {
        let channel: Channel = channels[i]
        let cate = channel.category
        let langArr = channel.languages
        for (let j = 0; j < langArr.length; j++) {
          let lang = langArr[j]
          const isLangContained = languagesM.has(lang.name)
          if (!isLangContained) {
            languagesM.set(lang.name, [channel])
          } else {
            languagesM.set(lang.name, [...languagesM.get(lang.name), channel])
          }
        }

        if (!cate) {
          cate = 'None'
        }

        const isContained = categoriesM.has(cate)

        if (!isContained) {
          categoriesM.set(cate, [channel])
        } else {
          categoriesM.set(cate, [...categoriesM.get(cate), channel])
        }
      }

      setCateChan(categoriesM)
      setLangChan(languagesM)
      initCategories = Array.from(categoriesM.keys())
      initLanguages = Array.from(languagesM.keys())
      setCategories(initCategories)
      setLanguages(initLanguages)
      setChoices(initCategories)
      setChannels(categoriesM)
    })
  }, [])

  const handleToggleButtonGroupChange = (event: MouseEvent<HTMLElement>, newAlignment: string,) => {
    setAlignment(newAlignment)
    switch (newAlignment) {
      case 'cate':
        setChoices(categories)
        setChannels(cateChan)
        return
      case 'lang':
        setChoices(languages)
        setChannels(langChan)
        return
    }
  }

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="lg"
        sx={{
          height: '360px',
          mt: '5px',
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography variant="h5" gutterBottom component="div">
          {channelName}
        </Typography>
        <Player url={url} />
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleToggleButtonGroupChange}
        >
          <ToggleButton value="cate">Categories</ToggleButton>
          <ToggleButton value="lang">Languages</ToggleButton>
        </ToggleButtonGroup>
        <Channels
          choices={choices}
          channels={channels}
          setUrl={setUrl}
          setChannelName={setChannelName}
        />
      </Container>
    </>
  )
}

export default HomePage
