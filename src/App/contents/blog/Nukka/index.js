import importedComponent from 'react-imported-component'
import image from './WDW-nukka.jpg'

export default {
  title: 'We Do Wunders — Nukka, Designer',
  author: {
    name: 'Nukka',
    title: 'Designer'
  },
  publishDate: 'Jan 30, 2019',
  readTimeMinutes: 4,
  keywords: 'culture, Berlin',
  category: 'culture',
  image: image,

  BlogComponent: importedComponent(() => import('./post')),
}
