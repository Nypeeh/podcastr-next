import React, { useCallback } from 'react'
import { AppProps } from 'next/app'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import { usePersistedState } from '../hooks/usePersistedState'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
import PlayerProvider from '../contexts/PlayerContext'

import Header from '../components/Header'
import Player from '../components/Player'
import PlayerFooter from '../components/PlayerFooter'

import GlobalStyle from '../styles/Global'
import { Container } from '../styles/App'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    '@Podcastr:theme',
    light
  )

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light)
  }, [setTheme, theme.title])

  return (
    <ThemeProvider theme={theme}>
      <PlayerProvider>
        <Container>
          <section>
            <Header toggleTheme={toggleTheme} />
            <main>
              <Component {...pageProps} />
            </main>
          </section>

          <Player />
          <PlayerFooter />
        </Container>

        <GlobalStyle />
      </PlayerProvider>
    </ThemeProvider>
  )
}

export default MyApp
