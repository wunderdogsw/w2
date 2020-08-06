import importedComponent from 'react-imported-component'
import image from './piispavissy-wunderdog.jpg'

export default {
  title: 'Uncharted Territories — Part II',
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
