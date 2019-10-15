import importedComponent from 'react-imported-component'
import image from './are-we-ceos.png'

export default {
  title: 'Are we CEOs everyone?',
  author: {
    name: 'Vissy',
    title: 'Software developer'
  },
  publishDate: 'Oct 18, 2019',
  readTimeMinutes: 3,
  keywords: 'software development, self-management',
  category: 'technology',
  image: image,

  BlogComponent: importedComponent(() => import('./post')),
}
