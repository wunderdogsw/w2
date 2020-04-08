import importedComponent from 'react-imported-component'
import image from './turger.jpeg'

export default {
  title: 'At the age of 12 I found the browser DevTools that revolutionized my life',
  author: {
    name: 'Turger',
    title: 'Software developer'
  },
  publishDate: 'Jan 14, 2019',
  readTimeMinutes: 4,
  keywords: 'culture, development',
  category: 'culture',
  image: image,

  content: importedComponent(() => import('./post')),
}
