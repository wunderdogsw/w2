import importedComponent from 'react-imported-component'
import image from './ville-wunderdog.jpg'

export default {
  title: 'Coding is like digital carpentry',
  author: {
    name: 'Ville Nuutinen',
    title: 'Software developer'
  },
  publishDate: 'Jan 21, 2019',
  readTimeMinutes: 3,
  keywords: 'culture, development',
  category: 'culture',
  image: image,

  content: importedComponent(() => import('./post')),
}
