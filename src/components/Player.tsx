import ReactPlayer, { Config } from 'react-player'
import { CSSProperties, ReactElement, useEffect, useState } from 'react'

interface SourceProps {
  src: string
  type: string
}

const Player = () => {
  const [url, setUrl] = useState<string | string[] | SourceProps[] | MediaStream>(
    'https://live-k2301-kbp.1plus1.video/sport/smil:sport.smil/playlist.m3u8'
  )
  const [playing, setPlaying] = useState<boolean>(true)
  const [loop, setLoop] = useState<boolean>(true)
  const [controls, setControls] = useState<boolean>(true)
  const [light, setLight] = useState<boolean | string>(true)
  const [volume, setVolume] = useState<number>(0.6)
  const [muted, setMuted] = useState<boolean>(false)
  const [playbackRate, setPlaybackRate] = useState<number>(1)
  const [width, setWidth] = useState<string>('640px')
  const [height, setHeight] = useState<string>('360px')
  const [style, setStyle] = useState<CSSProperties>({})
  const [progressInterval, setProgressInterval] = useState<number>(1000)
  const [playsinline, setPlaysinline] = useState<boolean>(false)
  const [pip, setPip] = useState<boolean>(false)
  const [stopOnUnmount, setStopOnUnmount] = useState<boolean>(false)
  const [fallback, setFallBack] = useState<ReactElement>(<div/>)
  const [wrapper, setWrapper] = useState<any>()
  const [playIcon, setPlayIcon] = useState<ReactElement>()
  const [previewTabIndex, setPreviewTabIndex] = useState<number>(0)
  const [config, setConfig] = useState<Config>({})

  useEffect(()=>{
    if (typeof url === 'string') {
      if (!ReactPlayer.canPlay(url)) {
        alert('can not play this')
      }
    }
  })

  const handlePlayerReady = (player: ReactPlayer) => {
  }

  const handlePlayerStart = () => {
  }

  const handlePlayerPlay = () => {
  }

  const handlePlayerProgress = (state: {
    played: number
    playedSeconds: number
    loaded: number
    loadedSeconds: number
  }) => {
    console.log(state.played)
    console.log(state.playedSeconds)
    console.log(state.loaded)
    console.log(state.loadedSeconds)
  }

  const handlePlayerDuration = (duration: number) => {
  }

  const handlePlayerPause = () => {
  }

  const handlePlayerBuffer = () => {
  }

  const handlePlayerBufferEnd = () => {
  }

  const handlePlayerSeek = (seconds: number) => {
  }

  const handlePlayerPlaybackRateChange = () => {
  }

  const handlePlayerEnded = () => {
  }

  const handlePlayerError = (error: any, data?: any, hlsInstance?: any, hlsGlobal?: any) => {
  }

  const handlePlayerClickPreview = (event: any) => {
  }

  const handleEnablePIP = () => {
  }

  const handleDisablePIP = () => {
  }

  return (
    <>
      <ReactPlayer
        url={url}
        playing={playing}
        loop={loop}
        controls={controls}
        light={light}
        volume={volume}
        muted={muted}
        playbackRate={playbackRate}
        width={width}
        height={height}
        style={style}
        progressInterval={progressInterval}
        playsinline={playsinline}
        pip={pip}
        stopOnUnmount={stopOnUnmount}
        fallback={fallback}
        wrapper={wrapper}
        playIcon={playIcon}
        previewTabIndex={previewTabIndex}
        config={config}
        onReady={handlePlayerReady}
        onStart={handlePlayerStart}
        onPlay={handlePlayerPlay}
        onProgress={handlePlayerProgress}
        onDuration={handlePlayerDuration}
        onPause={handlePlayerPause}
        onBuffer={handlePlayerBuffer}
        onBufferEnd={handlePlayerBufferEnd}
        onSeek={handlePlayerSeek}
        onPlaybackRateChange={handlePlayerPlaybackRateChange}
        onEnded={handlePlayerEnded}
        onError={handlePlayerError}
        onClickPreview={handlePlayerClickPreview}
        onEnablePIP={handleEnablePIP}
        onDisablePIP={handleDisablePIP}
      />
    </>
  )
}

export default Player
