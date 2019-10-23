import importedComponent from 'react-imported-component'
import image from './pomo-developer.jpg'

export default {
  title: 'We do wunders — Pomo, developer',
  author: {
    name: 'Pomo',
    title: 'Software developer'
  },
  publishDate: 'May 3, 2019',
  readTimeMinutes: 4,
  keywords: 'culture, Berlin',
  category: 'culture',
  image: image,

  content: importedComponent(() => import('./post')),
}
