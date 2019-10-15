import importedComponent from 'react-imported-component'
import image from './hunttis.jpeg'

export default {
  title: 'We do Wunders — Hunttis, Coder',
  author: {
    name: 'Hunttis',
    title: 'Software developer'
  },
  publishDate: 'Jan 21, 2019',
  readTimeMinutes: 3,
  keywords: 'culture, development',
  category: 'culture',
  image: image,

  BlogComponent: importedComponent(() => import('./post')),
}
