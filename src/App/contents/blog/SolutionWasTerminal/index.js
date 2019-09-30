import importedComponent from 'react-imported-component'

export default {
  title: 'I had a problem, and the solution was terminal',
  author: 'Piispa',
  publishDate: 'August 7, 2019',
  readTimeMinutes: 3,
  keywords: 'javascript, hsl',
  category: 'problem/solution',

  BlogComponent: importedComponent(() => import('./post')),
}
