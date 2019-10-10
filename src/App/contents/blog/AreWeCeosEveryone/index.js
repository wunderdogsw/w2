import importedComponent from 'react-imported-component'
import image from './are-we-ceos.png'

export default {
  title: 'Are we CEOs everyone?',
  author: 'Vissy, software developer',
  publishDate: 'Oct 18, 2019',
  readTimeMinutes: 3,
  keywords: 'software development, self-management',
  category: 'software development',
  image: image,

  BlogComponent: importedComponent(() => import('./post')),
}
