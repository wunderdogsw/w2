import importedComponent from 'react-imported-component'

export default {
  title: 'Agile Methods Are Everything But “Quick and Dirty”',
  author: 'Remo, software developer',
  publishDate: 'Aug 23, 2019',
  readTimeMinutes: 4,
  keywords: 'software development, agile methods',
  category: 'software development',

  BlogComponent: importedComponent(() => import('./post')),
}
