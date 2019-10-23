import importedComponent from 'react-imported-component'
import image from './product-development.jpg'

export default {
  title: 'Improving Your Product Starts With a Feature Review',
  author: {
    name: 'Bole',
    title: 'Business Lead'
  },
  publishDate: 'Jan 10, 2019',
  readTimeMinutes: 5,
  keywords: 'product development, analytics',
  category: 'technology',
  image: image,

  content: importedComponent(() => import('./post')),
}
