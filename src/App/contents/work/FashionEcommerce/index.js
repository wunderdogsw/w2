import importedComponent from 'react-imported-component'
import image from './ecoomerce-wunderdog-hero.jpg'

export default {
  title: 'Skyrocketing subscriptions with clean code',
  client: 'Europe´s leading fashion e-commerce company',
  publishDate: 'Feb 21, 2020',
  keywords: 'Full-stack development, Technology Lead',
  category: 'retail, consumers',
  image: image,

  content: importedComponent(() => import('./content')),
}
