import Player, { SourceProps } from '../components/Player'
import { useEffect, useState } from 'react'
import { Button, Container, CssBaseline } from '@mui/material'
import { getChannels } from '../api/channels'
import { AxiosResponse } from 'axios'

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
    'https://amc-ifc-films-picks-1.imdbtv.wurl.com/manifest/playlist.m3u8'
  )

  const [categories, setCategories] = useState<any[]>([])

  useEffect(() => {
    getChannels().then((res: AxiosResponse) => {
      if (res.status !== 200) {
        alert('error')
      }
      const channels = res.data

      channels.map((item: Channel, index: number) => {
        return item
      })

      let categoriesM = new Map()

      for (let i = 0; i < channels.length; i++) {
        let channel: Channel = channels[i]
        let cate = channel.category
        if (!cate) {
          cate = 'none'
        }

        const isContained = categoriesM.has(cate)

        if (!isContained) {
          categoriesM.set(cate, [channel])
        } else {
          categoriesM.set(cate, [...categoriesM.get(cate), channel])
        }
        let cates = Array.from(categoriesM.keys())
        setCategories(cates)
      }
    })
  })

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ height: '360px' }}>
        <Player url={url} />
        {categories.map((item) => {
          return item.concat(' ')
        })}
      </Container>
    </>
  )
}

export default HomePage
