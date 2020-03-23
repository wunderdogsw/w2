import importedComponent from 'react-imported-component'
import image from './Seiskavisa-Wunderdog-office.jpg'

export default {
  title: 'An Asset Called Culture to Carry You Through Hard Times',
  author: {
    name: 'Wunderdog',
    title: 'Wunderdog'
  },
  publishDate: 'March 23, 2020',
  readTimeMinutes: 7,
  keywords: 'culture, remote work',
  category: 'culture',
  image: image,

  content: importedComponent(() => import('./post')),
}
