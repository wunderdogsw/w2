import importedComponent from 'react-imported-component'
import image from './north-star-wunderdog.jpg'

export default {
  title: 'The first mistake in your software project',
  author: {
    name: 'Tommi Huovinen',
    title: 'Business Lead'
  },
  publishDate: 'Dec 20, 2018',
  readTimeMinutes: 3,
  keywords: 'product development, analytics & metrics',
  category: 'technology',
  image: image,

  content: importedComponent(() => import('./post')),
}
