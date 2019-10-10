import importedComponent from 'react-imported-component'
import image from './piispavissy.jpg'

export default {
  title: 'Pair Programming — Uncharted Territories — Part II',
  author: 'Piispa & Vissy',
  publishDate: 'Feb 14, 2019',
  readTimeMinutes: 4,
  keywords: 'programming, teamwork',
  category: 'software development',
  image: image,

  BlogComponent: importedComponent(() => import('./post')),
}
