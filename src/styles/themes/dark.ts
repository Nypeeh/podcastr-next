import { shade } from 'polished'

export default {
  title: 'dark',

  colors: {
    primary: '#8257e5',
    secundary: '#ddd',
    border: shade(0.4, '#242038'),

    borderEmptyPlayer: shade(0.2, '#a58ae3'),

    background: '#242038',
    backgroundCards: shade(-0.2, '#242038'),
    backgroundPlayer: shade(0.35, '#8257e5'),

    title: '#a58ae3',
    text: shade(0.2, '#a58ae3')
  }
}
