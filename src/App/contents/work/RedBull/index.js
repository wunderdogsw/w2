import importedComponent from 'react-imported-component'
import image from './redbull-hero.png'

export default {
  title: 'A marketing campaign game in two weeks? Game on',
  client: 'Red Bull',
  publishDate: 'Oct 18, 2019',
  keywords: 'UI design, UX design, game design, full-stack development',
  category: '',
  image: image,

  content: importedComponent(() => import('./content')),
}
