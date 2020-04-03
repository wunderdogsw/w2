import importedComponent from 'react-imported-component'
import image from './ecoomerce-wunderdog-hero.jpg'

export default {
  title: 'Skyrocketing subscriptions with clean code',
  client: 'Europe´s leading fashion e-commerce company',
  publishDate: 'April 2, 2020',
  keywords: 'Full-stack development, Technology Lead',
  category: 'retail, consumers',
  image: image,

  content: importedComponent(() => import('./content')),
}
