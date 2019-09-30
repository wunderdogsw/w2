import importedComponent from 'react-imported-component'

export default {
  title: 'I had a problem: Don’t play it again, Sam!',
  author: 'Kapu',
  publishDate: 'Mar 4, 2019',
  readTimeMinutes: 4,
  keywords: 'javascript, HTTP, problem solving',
  category: 'problem/solution',

  BlogComponent: importedComponent(() => import('./post')),
}
