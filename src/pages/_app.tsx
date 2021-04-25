import React from 'react'

import { AppProps } from 'next/app'
import GlobalStyle from '../styles/Global'
import Header from '../components/Header'
import { Container } from '../styles/App'
import Player from '../components/Player'
import PlayerProvider from '../contexts/PlayerContext'
import PlayerFooter from '../components/PlayerFooter'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <PlayerProvider>
      <Container>
        <section>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
        </section>

        <Player />
        <PlayerFooter />
      </Container>

      <GlobalStyle />
    </PlayerProvider>
  )
}

export default MyApp
