import importedComponent from 'react-imported-component'

export default {
  title: 'Are we CEOs everyone?',
  author: 'Vissy, software developer',
  publishDate: 'Oct 18, 2019',
  readTimeMinutes: 3,
  keywords: 'software development, self-management',
  category: 'software development',

  BlogComponent: importedComponent(() => import('./post')),
}
