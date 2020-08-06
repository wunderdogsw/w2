import importedComponent from 'react-imported-component'
import image from './PCE-wunderdog.jpg'

export default {
  title: 'Production Chain Erosion Prevention by Design',
  author: {
    name: 'Lasse Kaikkonen',
    title: 'Service Designer'
  },
  publishDate: 'Feb 3, 2020',
  readTimeMinutes: 4,
  keywords: 'culture, design, service design',
  category: 'design',
  image: image,

  content: importedComponent(() => import('./post')),
}
