import Player, { SourceProps } from '../components/Player'
import { useState } from 'react'
import { Button, Container, CssBaseline } from '@mui/material'

const HomePage = () => {
  const [url, setUrl] = useState<string | string[] | SourceProps[] | MediaStream>(
    'https://d2hrvno5bw6tg2.cloudfront.net/smrtv-ch01/_definst_/smil:ch-01.smil/chunklist_b1692000_slita.m3u8'
  )

  const handleChangeUrl = () => {
    setUrl('http://39.134.39.39/PLTV/88888888/224/3221226257/index.m3u8')
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" style={{height: '360px'}}>
        <Player url={url} />
      </Container>
      <Button
        variant="contained"
        onClick={handleChangeUrl}
      >
        CHANGE
      </Button>
    </>
  )
}
export default HomePage
