import importedComponent from 'react-imported-component'
import image from './monitoring.jpeg'

export default {
  title: 'Why Should Every Developer Care About Monitoring',
  author: 'Tsuikkis, COO & founders',
  publishDate: 'Sep 18, 2018',
  readTimeMinutes: 5,
  keywords: 'monitoring, development',
  category: 'product development',
  image: image,

  BlogComponent: importedComponent(() => import('./post')),
}
