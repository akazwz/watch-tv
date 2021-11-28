import ReactPlayer, { Config } from 'react-player'
import { CSSProperties, ReactElement, useEffect, useState } from 'react'

export interface SourceProps {
  src: string
  type: string
}

const Player = (props: { url: string | string[] | SourceProps[] | MediaStream }) => {
  const { url } = props
  const [playing, setPlaying] = useState<boolean>(true)
  const [loop, setLoop] = useState<boolean>(true)
  const [controls, setControls] = useState<boolean>(true)
  const [light, setLight] = useState<boolean | string>(false)
  const [volume, setVolume] = useState<number>(0.6)
  const [muted, setMuted] = useState<boolean>(true)
  const [playbackRate, setPlaybackRate] = useState<number>(1)
  const [width, setWidth] = useState<string>('100%')
  const [height, setHeight] = useState<string>('100%')
  const [style, setStyle] = useState<CSSProperties>({})
  const [progressInterval, setProgressInterval] = useState<number>(1000)
  const [playsinline, setPlaysinline] = useState<boolean>(true)
  const [pip, setPip] = useState<boolean>(false)
  const [stopOnUnmount, setStopOnUnmount] = useState<boolean>(false)
  const [fallback, setFallBack] = useState<ReactElement>(<div />)
  const [wrapper, setWrapper] = useState<any>()
  const [playIcon, setPlayIcon] = useState<ReactElement>()
  const [previewTabIndex, setPreviewTabIndex] = useState<number>(0)
  const [config, setConfig] = useState<Config>({})

  useEffect(() => {
    if (typeof url === 'string') {
      if (!ReactPlayer.canPlay(url)) {
        alert('can not play this')
      }
    }
  })

  const handlePlayerReady = (player: ReactPlayer) => {
    setTimeout(() => {
      setMuted(false)
    }, 1000)
  }

  const handlePlayerStart = () => {
    setTimeout(() => {
      setPlaying(true)
    }, 1000)
  }

  const handlePlayerPlay = () => {
  }

  const handlePlayerProgress = (state: {
    played: number
    playedSeconds: number
    loaded: number
    loadedSeconds: number
  }) => {
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
