import importedComponent from 'react-imported-component'
import image from './kanki.jpeg'

export default {
  title: 'We do wunders',
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
