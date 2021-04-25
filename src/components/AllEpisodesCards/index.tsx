import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePlayer } from '../../contexts/PlayerContext'

import { Container, EpisodeDetails } from './styles'

interface Episode {
  id: string
  title: string
  thumbnail: string
  members: string
  publishedAt: string
  duration: number
  durationAsString: string
  url: string
}

interface AllEpisodesCardsProps {
  latestEpisodes: Episode[]
  allEpisodes: Episode[]
}

const AllEpisodesCards: React.FC<AllEpisodesCardsProps> = ({
  latestEpisodes,
  allEpisodes
}) => {
  const { playList } = usePlayer()
  const episodeList = [...latestEpisodes, ...allEpisodes]

  return (
    <Container>
      <h2>Todos episódios</h2>

      <ul>
        {latestEpisodes.map((episode, index) => (
          <li key={episode.id}>
            <Image
              width={192}
              height={192}
              src={episode.thumbnail}
              alt={episode.title}
              objectFit="cover"
            />

            <EpisodeDetails>
              <Link href={`/episodes/${episode.id}`}>
                <a>{episode.title}</a>
              </Link>
              <p>{episode.members}</p>
              <span>{episode.publishedAt}</span>
              <span>{episode.durationAsString}</span>
            </EpisodeDetails>

            <button type="button" onClick={() => playList(episodeList, index)}>
              <img src="/play-green.svg" alt="Tocar episódio" />
            </button>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default AllEpisodesCards
