import importedComponent from 'react-imported-component'
import image from './quick-dirty.jpeg'

export default {
  title: 'Agile Methods Are Everything But “Quick and Dirty”',
  author: {
    name: 'Remo',
    title: 'Software developer'
  },
  publishDate: 'Aug 23, 2019',
  readTimeMinutes: 4,
  keywords: 'software development, agile methods',
  category: 'technology',
  image: image,

  BlogComponent: importedComponent(() => import('./post')),
}
