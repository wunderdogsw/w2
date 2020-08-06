import importedComponent from 'react-imported-component'
import image from './nukka-wunderdog.jpg'

export default {
  title: 'I decided that as soon as I can I’ll leave the town behind, and start studying media',
  author: {
    name: 'Heini Kärkkäinen',
    title: 'Designer'
  },
  publishDate: 'Jan 30, 2019',
  readTimeMinutes: 4,
  keywords: 'culture, Berlin',
  category: 'culture',
  image: image,

  content: importedComponent(() => import('./post')),
}
