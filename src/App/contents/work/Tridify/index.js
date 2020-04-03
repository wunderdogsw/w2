import importedComponent from 'react-imported-component'
import image from './Tridify-Wunderdog2.jpg'

export default {
  title: 'Constructing a more agile environment',
  client: 'Tridify',
  publishDate: 'February 17, 2020',
  keywords: 'Full-stack development, Technology Lead',
  category: 'startups',
  image: image,

  content: importedComponent(() => import('./content')),
}
