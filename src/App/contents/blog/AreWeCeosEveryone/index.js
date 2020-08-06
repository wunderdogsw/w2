import importedComponent from 'react-imported-component'
import image from './are-we-ceos-wunderdog.jpg'

export default {
  title: 'Are we CEOs everyone?',
  author: {
    name: 'Vissy',
    title: 'Software developer'
  },
  publishDate: 'Oct 18, 2018',
  readTimeMinutes: 3,
  keywords: 'software development, self-management',
  category: 'technology',
  image: image,

  content: importedComponent(() => import('./post')),
}
