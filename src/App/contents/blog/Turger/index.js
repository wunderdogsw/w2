import importedComponent from 'react-imported-component'
import image from './turger.jpeg'

export default {
  title: 'We do wunders',
  author: {
    name: 'Turger',
    title: 'Software developer'
  },
  publishDate: 'Jan 14, 2019',
  readTimeMinutes: 4,
  keywords: 'culture, development',
  category: 'culture',
  image: image,

  content: importedComponent(() => import('./post')),
}
