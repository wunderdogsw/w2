import importedComponent from 'react-imported-component'
import image from './kiti.jpg'

export default {
  title: 'We do Wunders — Kiti, Developer',
  author: 'Kiti',
  publishDate: 'Jun 6, 2019',
  readTimeMinutes: 4,
  keywords: 'culture, development',
  category: 'biography',
  image: image,

  BlogComponent: importedComponent(() => import('./post')),
}
