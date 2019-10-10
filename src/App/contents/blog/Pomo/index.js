import importedComponent from 'react-imported-component'
import image from './pomo-developer.jpg'

export default {
  title: 'We do wunders — Pomo, developer',
  author: 'Pomo',
  publishDate: 'May 3, 2019',
  readTimeMinutes: 4,
  keywords: 'culture, Berlin',
  category: 'biography',
  image: image,

  BlogComponent: importedComponent(() => import('./post')),
}
