import importedComponent from 'react-imported-component'
import image from './ESM-hero.jpg'

export default {
  title: 'Bringing clarity to the data network business',
  client: 'Elisa Santa Monica',
  publishDate: 'Feb 18, 2020',
  keywords: 'Full-stack development, Technology Lead',
  category: 'consumers',
  image: image,

  content: importedComponent(() => import('./content')),
}
