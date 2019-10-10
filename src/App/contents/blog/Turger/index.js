import importedComponent from 'react-imported-component'
import image from './turger.jpeg'

export default {
  title: 'We Do Wunders— Turger, Coder',
  author: 'Turger',
  publishDate: 'Jan 14, 2019',
  readTimeMinutes: 4,
  keywords: 'culture, development',
  category: 'biography',
  image: image,

  BlogComponent: importedComponent(() => import('./post')),
}
