import importedComponent from 'react-imported-component'
import image from './north-star.jpg'

export default {
  title: 'The First Mistake In Your Software Project',
  author: {
    name: 'Bole',
    title: 'Business Lead'
  },
  publishDate: 'Dec 20, 2018',
  readTimeMinutes: 3,
  keywords: 'product development, analytics & metrics',
  category: 'technology',
  image: image,

  BlogComponent: importedComponent(() => import('./post')),
}
