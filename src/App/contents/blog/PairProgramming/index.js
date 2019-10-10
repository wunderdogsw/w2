import importedComponent from 'react-imported-component'
import image from './pairprog1.png'

export default {
  title: 'Pair Programming — Uncharted Territories — Part I',
  author: 'Piispa & Vissy',
  publishDate: 'Feb 13, 2019',
  readTimeMinutes: 4,
  keywords: 'programming, teamwork',
  category: 'software development',
  image: image,

  BlogComponent: importedComponent(() => import('./post')),
}
