import importedComponent from 'react-imported-component'

export default {
  title: 'Improving Your Product Starts With a Feature Review',
  author: 'Bole',
  publishDate: 'Jan 10, 2019',
  readTimeMinutes: 5,
  keywords: 'product development, analytics',
  category: 'product development',

  BlogComponent: importedComponent(() => import('./post')),
}
