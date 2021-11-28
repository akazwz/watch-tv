import { useEffect, useState } from 'react'
import { AxiosResponse } from 'axios'
import { Container, CssBaseline, Typography } from '@mui/material'
import { getChannels } from '../api/channels'
import Player, { SourceProps } from '../components/Player'
import ChannelsCate from '../components/ChannelsCate'

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
    'http://1hdru-hls-otcnet.cdnvideo.ru/onehdmusic/tracks-v1a1/index.m3u8'
  )
  const [channelName, setChannelName] = useState<string>('1HD Music Television')
  const [categories, setCategories] = useState<string[]>([''])
  const [languages, setLanguages] = useState<string[]>([''])
  const [cateChan, setCateChan] = useState<Map<any, any>>(new Map())
  const [langChan, setLangChan] = useState<Map<any, any>>(new Map())

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
    })
  }, [])

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
        <ChannelsCate
          cateChan={cateChan}
          categories={categories}
          langChan={langChan}
          languages={languages}
          setUrl={setUrl}
          setChannelName={setChannelName}
        />
      </Container>
    </>
  )
}

export default HomePage
