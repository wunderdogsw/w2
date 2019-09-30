import importedComponent from 'react-imported-component'

export default {
  title: 'We Do Wunders— Turger, Coder',
  author: 'Turger',
  publishDate: 'Jan 14, 2019',
  readTimeMinutes: 4,
  keywords: 'culture, development',
  category: 'biography',

  BlogComponent: importedComponent(() => import('./post')),
}
