import importedComponent from 'react-imported-component'

export default {
  title: 'I had a problem: I keep losing control',
  author: 'Manu',
  publishDate: 'April 1, 2019',
  readTimeMinutes: 2,
  keywords: 'javascript, HTTP, problem solving',
  category: 'problem/solution',

  BlogComponent: importedComponent(() => import('./post')),
}
