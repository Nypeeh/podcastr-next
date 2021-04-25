import { GetStaticProps } from 'next'
import Image from 'next/image'
import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { api } from '../services/api'
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString'

import { Container, LatestEpisodes, EpisodeDetails } from '../styles/pages/Home'
import { usePlayer } from '../contexts/PlayerContext'
import AllEpisodesTable from '../components/AllEpisodesTable'
import AllEpisodesCards from '../components/AllEpisodesCards'

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

interface Props {
  latestEpisodes: Episode[]
  allEpisodes: Episode[]
}

const Home: React.FC<Props> = ({ latestEpisodes, allEpisodes }) => {
  const { playList } = usePlayer()

  const episodeList = [...latestEpisodes, ...allEpisodes]

  return (
    <Container>
      <Head>
        <title>Home | Podcastr</title>
      </Head>

      <LatestEpisodes>
        <h2>Últimos lançamentos</h2>

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

              <button
                type="button"
                onClick={() => playList(episodeList, index)}
              >
                <img src="/play-green.svg" alt="Tocar episódio" />
              </button>
            </li>
          ))}
        </ul>
      </LatestEpisodes>

      <AllEpisodesTable
        allEpisodes={allEpisodes}
        latestEpisodes={latestEpisodes}
      />
      <AllEpisodesCards
        allEpisodes={allEpisodes}
        latestEpisodes={latestEpisodes}
      />
    </Container>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', {
        locale: ptBR
      }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(
        Number(episode.file.duration)
      ),
      url: episode.file.url
    }
  })

  const latestEpisodes = episodes.slice(0, 2)
  const allEpisodes = episodes.slice(2, episodes.length)

  return {
    props: {
      latestEpisodes,
      allEpisodes
    },
    revalidate: 60 * 60 * 8
  }
}
