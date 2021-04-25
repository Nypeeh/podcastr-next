import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      primary: string
      secundary: string

      borderEmptyPlayer?: string

      background: string
      backgroundCards: string
      backgroundPlayer: string
      backgroundButton: string

      border: string
      title: string
      text: string
    }
  }
}
