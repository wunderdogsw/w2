import importedComponent from 'react-imported-component'
import image from './monitoring-wunderdog.jpg'

export default {
  title: 'Why should every developer care about monitoring',
  author: {
    name: 'Ville Komulainen',
    title: 'COO & founder'
  },
  publishDate: 'Sep 18, 2018',
  readTimeMinutes: 5,
  keywords: 'monitoring, development',
  category: 'technology',
  image: image,

  content: importedComponent(() => import('./post')),
}
