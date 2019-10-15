import importedComponent from 'react-imported-component'
import image from './communication.png'

export default {
  title: 'The Importance of Communications in Product Development',
  author: {
    name: 'Tsuikkis',
    title: 'COO & founder'
  },
  publishDate: 'Sep 18, 2018',
  readTimeMinutes: 5,
  keywords: 'product development, teamwork, communication',
  category: 'technology',
  image: image,

  BlogComponent: importedComponent(() => import('./post')),
}
