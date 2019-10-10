import importedComponent from 'react-imported-component'
import image from './WDW-nukka.jpg'

export default {
  title: 'We Do Wunders — Nukka, Designer',
  author: 'Nukka',
  publishDate: 'Jan 30, 2019',
  readTimeMinutes: 4,
  keywords: 'culture, Berlin',
  category: 'biography',
  image: image,

  BlogComponent: importedComponent(() => import('./post')),
}
