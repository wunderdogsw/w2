import importedComponent from 'react-imported-component'
import image from './communication-wunderdog.jpg'

export default {
  title: 'The importance of communications in product development',
  author: {
    name: 'Ville Komulainen',
    title: 'COO & founder'
  },
  publishDate: 'Sep 18, 2018',
  readTimeMinutes: 5,
  keywords: 'product development, teamwork, communication',
  category: 'technology',
  image: image,

  content: importedComponent(() => import('./post')),
}
