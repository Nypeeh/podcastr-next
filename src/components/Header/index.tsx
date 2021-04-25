import React, { useContext } from 'react'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

import { Container, SwitchContainer } from './styles'

interface Props {
  toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', { locale: ptBR })

  return (
    <Container>
      <img src="/logo.svg" alt="Podcastr" />

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>

      <SwitchContainer>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={50}
          handleDiameter={30}
          offHandleColor="#ddd"
          offColor={shade(0.2, colors.primary)}
          onColor={colors.primary}
        />
      </SwitchContainer>
    </Container>
  )
}

export default Header
