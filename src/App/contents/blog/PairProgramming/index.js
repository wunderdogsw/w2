import importedComponent from 'react-imported-component'
import image from './pairprog1.png'

export default {
  title: 'Uncharted Territories — Part I',
  author: {
    name: 'Piispa & Vissy'
  },
  publishDate: 'Feb 13, 2019',
  readTimeMinutes: 4,
  keywords: 'programming, teamwork',
  category: 'technology',
  image: image,

  content: importedComponent(() => import('./post')),
}
