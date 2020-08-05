import importedComponent from 'react-imported-component'
import image from './Barona-wunderdog05.jpg'

export default {
  title: 'Real-time wage calculation service from scratch',
  client: 'Barona Logistiikka',
  publishDate: 'May 31, 2020',
  keywords: 'Design Sprints',
  category: 'retail',
  image: image,

  content: importedComponent(() => import('./content')),
}
