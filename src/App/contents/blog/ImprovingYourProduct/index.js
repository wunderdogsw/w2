import importedComponent from 'react-imported-component'
import image from './product-development.jpg'

export default {
  title: 'Improving your product starts with a feature review',
  author: {
    name: 'Tommi Huovinen',
    title: 'Business Lead'
  },
  publishDate: 'Jan 10, 2019',
  readTimeMinutes: 5,
  keywords: 'product development, analytics',
  category: 'technology',
  image: image,

  content: importedComponent(() => import('./post')),
}
