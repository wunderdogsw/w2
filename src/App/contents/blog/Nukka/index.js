import importedComponent from 'react-imported-component'
import image from './WDW-nukka.jpg'

export default {
  title: 'We do wunders',
  author: {
    name: 'Nukka',
    title: 'Designer'
  },
  publishDate: 'Jan 30, 2019',
  readTimeMinutes: 4,
  keywords: 'culture, Berlin',
  category: 'culture',
  image: image,

  content: importedComponent(() => import('./post')),
}
