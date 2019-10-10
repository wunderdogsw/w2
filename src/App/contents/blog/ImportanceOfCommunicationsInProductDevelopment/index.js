import importedComponent from 'react-imported-component'
import image from './communication.png'

export default {
  title: 'The Importance of Communications in Product Development',
  author: 'Tsuikkis, COO & founders',
  publishDate: 'Sep 18, 2018',
  readTimeMinutes: 5,
  keywords: 'product development, teamwork, communication',
  category: 'product development',
  image: image,

  BlogComponent: importedComponent(() => import('./post')),
}
