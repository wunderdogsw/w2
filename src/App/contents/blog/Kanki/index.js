import importedComponent from 'react-imported-component'
import image from './kanki-wunderdog.jpg'

export default {
  title: 'I feel I’ve now seen the Finnish organisational extremes',
  author: {
    name: 'Kanki',
    title: 'Service Designer'
  },
  publishDate: 'Oct 14, 2019',
  readTimeMinutes: 4,
  keywords: 'culture, design, service design',
  category: 'culture',
  image: image,

  content: importedComponent(() => import('./post')),
}
