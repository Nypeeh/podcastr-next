import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePlayer } from '../../contexts/PlayerContext'

import { Container } from './styles'

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

interface AllEpisodesTableProps {
  latestEpisodes: Episode[]
  allEpisodes: Episode[]
}

const AllEpisodesTable: React.FC<AllEpisodesTableProps> = ({
  latestEpisodes,
  allEpisodes
}) => {
  const { playList } = usePlayer()
  const episodeList = [...latestEpisodes, ...allEpisodes]

  return (
    <Container>
      <h2>Todos episódios</h2>

      <table cellSpacing={0}>
        <thead>
          <tr>
            <th></th>
            <th>Podcast</th>
            <th>Integrantes</th>
            <th>Data</th>
            <th>Duração</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {allEpisodes.map((episode, index) => (
            <tr key={episode.id}>
              <td style={{ width: 72 }}>
                <Image
                  width={120}
                  height={120}
                  src={episode.thumbnail}
                  alt={episode.title}
                  objectFit="cover"
                />
              </td>
              <td>
                <Link href={`/episodes/${episode.id}`}>
                  <a>{episode.title}</a>
                </Link>
              </td>
              <td>{episode.members}</td>
              <td style={{ width: 100 }}>{episode.publishedAt}</td>
              <td>{episode.durationAsString}</td>
              <td>
                <button
                  type="button"
                  onClick={() =>
                    playList(episodeList, index + latestEpisodes.length)
                  }
                >
                  <img src="/play-green.svg" alt="Tocar episódio" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default AllEpisodesTable
