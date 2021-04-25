import Image from 'next/image'
import React, { useEffect } from 'react'
import { usePlayer } from '../../contexts/PlayerContext'
import RCSlider from 'rc-slider'
import 'rc-slider/assets/index.css'

import {
  Container,
  EmptyPlayer,
  CurrentEpisode,
  Progress,
  Slider,
  EmptySlider,
  Buttons
} from './styles'
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString'

const Player: React.FC = () => {
  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    isLooping,
    isShuffling,
    togglePlay,
    toggleLoop,
    toggleShuffle,
    playNext,
    playPrevious,
    hasNext,
    hasPrevious,
    audioRef,
    progress,
    handleSeek,
    setHasEpisodeState
  } = usePlayer()
  const episode = episodeList[currentEpisodeIndex]

  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause()
    }
  }, [audioRef, isPlaying])

  useEffect(() => {
    setHasEpisodeState(!!episode)
  }, [episode, setHasEpisodeState])

  return (
    <Container>
      <header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      {episode ? (
        <CurrentEpisode>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            objectFit="cover"
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </CurrentEpisode>
      ) : (
        <EmptyPlayer>
          <strong>Selecione um podcast para ouvir</strong>
        </EmptyPlayer>
      )}

      <footer className={!episode ? 'empty' : ''}>
        <Progress>
          <span>{convertDurationToTimeString(progress)}</span>
          <Slider>
            {episode ? (
              <RCSlider
                max={episode.duration}
                value={progress}
                onChange={handleSeek}
                trackStyle={{ backgroundColor: '#04d361' }}
                railStyle={{ backgroundColor: '#9f75ff' }}
                handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
              />
            ) : (
              <EmptySlider />
            )}
          </Slider>
          <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
        </Progress>
        <Buttons>
          <button
            type="button"
            disabled={!episode || episodeList.length === 1}
            onClick={toggleShuffle}
            className={isShuffling ? 'isActive' : ''}
          >
            <img src="/shuffle.svg" alt="Embaralhar" />
          </button>
          <button
            type="button"
            disabled={!episode || !hasPrevious}
            onClick={playPrevious}
          >
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </button>

          <button
            type="button"
            className="playButton"
            disabled={!episode}
            onClick={togglePlay}
          >
            {isPlaying ? (
              <img src="/pause.svg" alt="Pausar" />
            ) : (
              <img src="/play.svg" alt="Tocar" />
            )}
          </button>

          <button
            type="button"
            disabled={!episode || !hasNext}
            onClick={playNext}
          >
            <img src="/play-next.svg" alt="Tocar proxima" />
          </button>
          <button
            type="button"
            disabled={!episode}
            onClick={toggleLoop}
            className={isLooping ? 'isActive' : ''}
          >
            <img src="/repeat.svg" alt="Repetir" />
          </button>
        </Buttons>
      </footer>
    </Container>
  )
}

export default Player
