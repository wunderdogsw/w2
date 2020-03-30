import importedComponent from 'react-imported-component'
import image from './ecoomerce-wunderdog-hero.jpg'

export default {
  title: 'Skyrocketing subscriptions',
  client: 'Europe´s leading fashion e-commerce company',
  publishDate: 'Feb 17, 2020',
  keywords: 'Full-stack development, Technology Lead',
  image: image,

  content: importedComponent(() => import('./content')),
}
