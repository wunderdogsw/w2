import importedComponent from 'react-imported-component'

export default {
  title: 'The First Mistake In Your Software Project',
  author: 'Bole',
  publishDate: 'Dec 20, 2018',
  readTimeMinutes: 3,
  keywords: 'product development, analytics & metrics',
  category: 'product development',

  BlogComponent: importedComponent(() => import('./post')),
}
