import importedComponent from 'react-imported-component'
import image from './designblog-3.jpg'

export default {
  title: 'Production Chain Erosion Prevention by Design',
  author: {
    name: 'Kanki, Lasse Kaikkonen',
    title: 'Service Designer'
  },
  publishDate: 'Feb 3, 2020',
  readTimeMinutes: 4,
  keywords: 'culture, design, service design',
  category: 'culture',
  image: image,

  content: importedComponent(() => import('./post')),
}
