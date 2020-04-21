import importedComponent from 'react-imported-component'
import image from './GlobalRetailer-Wunderdog.jpg'

export default {
  title: 'Accurate deliveries in the right places',
  client: 'A major global retailer',
  publishDate: 'March 2, 2020',
  keywords: 'Full-stack development, Technology Lead',
  category: 'retail, consumers',
  image: image,

  content: importedComponent(() => import('./content')),
}
