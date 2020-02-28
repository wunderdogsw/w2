import importedComponent from 'react-imported-component'
import image from './construction.jpg'

export default {
  title: 'How our customer experimented new business models with Design Sprint',
  author: {
    name: 'Juha Larm',
    title: 'Head of Design'
  },
  publishDate: 'Feb 28, 2020',
  readTimeMinutes: 4,
  keywords: 'design sprint, design, service design',
  category: 'design',
  image: image,

  content: importedComponent(() => import('./post')),
}
