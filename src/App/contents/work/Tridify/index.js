import importedComponent from 'react-imported-component'
import image from './tridify-Wunderdog2.jpg'

export default {
  title: 'Constructing a more agile environment',
  client: 'Tridify',
  publishDate: 'March 18, 2020',
  keywords: 'Full-stack development, Technology Lead',
  image: image,

  content: importedComponent(() => import('./content')),
}
