import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState
} from 'react'

interface Episode {
  title: string
  members: string
  thumbnail: string
  duration: number
  url: string
}

interface PlayerContextData {
  episodeList: Episode[]
  currentEpisodeIndex: number
  isPlaying: boolean
  isLooping: boolean
  isShuffling: boolean
  togglePlay(): void
  toggleLoop(): void
  toggleShuffle(): void
  setPlayingState(state: boolean): void
  clearPlayingState(): void
  play(episode: Episode): void
  playList(list: Episode[], index: number): void
  playNext(): void
  playPrevious(): void
  hasPrevious: boolean
  hasNext: boolean
  audioRef: React.MutableRefObject<HTMLAudioElement>
  setupProgressListener(): void
  handleSeek(amount: number): void
  handleEpisodeEnded(): void
  progress: number
  setHasEpisodeState(state: boolean): void
}

const PlayerContext = createContext<PlayerContextData>({} as PlayerContextData)

const PlayerProvider: React.FC = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [progress, setProgress] = useState(0)
  const [hasEpisode, setHasEpisode] = useState(false)

  const [episodeList, setEpisodeList] = useState([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLooping, setIsLooping] = useState(false)
  const [isShuffling, setIsShuffling] = useState(false)

  const play = useCallback((episode: Episode) => {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true)
  }, [])

  const playList = useCallback((list: Episode[], index: number) => {
    setEpisodeList(list)
    setCurrentEpisodeIndex(index)
    setIsPlaying(true)
  }, [])

  const togglePlay = useCallback(() => {
    setIsPlaying(state => !state)
  }, [])

  const toggleShuffle = useCallback(() => {
    setIsShuffling(state => !state)
  }, [])

  const toggleLoop = useCallback(() => {
    setIsLooping(!isLooping)
  }, [isLooping])

  const setPlayingState = useCallback((state: boolean) => {
    setIsPlaying(state)
  }, [])

  const hasPrevious = currentEpisodeIndex - 1 >= 0
  const hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length

  const playNext = useCallback(() => {
    if (isShuffling) {
      const nextRandomEpisodeIndex = Math.floor(
        Math.random() * episodeList.length
      )
      setCurrentEpisodeIndex(nextRandomEpisodeIndex)
    } else if (hasNext) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1)
    }
  }, [currentEpisodeIndex, episodeList.length, hasNext, isShuffling])

  const playPrevious = useCallback(() => {
    const previousEpisodeIndex = currentEpisodeIndex - 1

    if (hasPrevious) {
      setCurrentEpisodeIndex(previousEpisodeIndex)
    }
  }, [currentEpisodeIndex, hasPrevious])

  const clearPlayingState = useCallback(() => {
    setEpisodeList([])
    setCurrentEpisodeIndex(0)
  }, [])

  const setupProgressListener = useCallback(() => {
    audioRef.current.currentTime = 0

    audioRef.current.addEventListener('timeupdate', () => {
      setProgress(Math.floor(audioRef.current.currentTime))
    })
  }, [])

  const handleSeek = useCallback((amount: number) => {
    audioRef.current.currentTime = amount
    setProgress(Math.floor(amount))
  }, [])

  const handleEpisodeEnded = useCallback(() => {
    if (hasNext) {
      playNext()
    } else {
      clearPlayingState()
    }
  }, [clearPlayingState, hasNext, playNext])

  const setHasEpisodeState = useCallback((state: boolean) => {
    setHasEpisode(state)
  }, [])

  return (
    <PlayerContext.Provider
      value={{
        episodeList,
        currentEpisodeIndex,
        isPlaying,
        isLooping,
        isShuffling,
        setPlayingState,
        togglePlay,
        toggleLoop,
        clearPlayingState,
        play,
        playList,
        playNext,
        playPrevious,
        hasPrevious,
        hasNext,
        toggleShuffle,
        audioRef,
        setupProgressListener,
        handleSeek,
        handleEpisodeEnded,
        progress,
        setHasEpisodeState
      }}
    >
      {children}
      {hasEpisode && (
        <audio
          ref={audioRef}
          src={episodeList[currentEpisodeIndex].url}
          loop={isLooping}
          onEnded={handleEpisodeEnded}
          onLoadedMetadata={setupProgressListener}
          autoPlay
          onPlay={() => setPlayingState(true)}
          onPause={() => setPlayingState(false)}
        />
      )}
    </PlayerContext.Provider>
  )
}

export const usePlayer = (): PlayerContextData => {
  const context = useContext(PlayerContext)

  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider')
  }

  return context
}

export default PlayerProvider
