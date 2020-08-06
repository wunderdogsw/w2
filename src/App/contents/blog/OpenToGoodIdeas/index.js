import importedComponent from 'react-imported-component'
import image from './open-source-wunderdog.jpg'

export default {
  title: 'Open to good ideas',
  author: {
    name: 'Wunderdog'
  },
  publishDate: 'Dec 4, 2018',
  readTimeMinutes: 2,
  keywords: 'Open-source project, culture , problem solving',
  category: 'technology',
  image: image,

  content: importedComponent(() => import('./post')),
}
