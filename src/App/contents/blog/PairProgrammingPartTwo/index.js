import importedComponent from 'react-imported-component'
import image from './piispavissy.jpg'

export default {
  title: 'Pair Programming — Uncharted Territories — Part II',
  author: {
    name: 'Piispa & Vissy'
  },
  publishDate: 'Feb 14, 2019',
  readTimeMinutes: 4,
  keywords: 'programming, teamwork',
  category: 'technology',
  image: image,

  content: importedComponent(() => import('./post')),
}
