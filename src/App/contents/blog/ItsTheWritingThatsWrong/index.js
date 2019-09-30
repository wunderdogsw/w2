import importedComponent from 'react-imported-component'

export default {
  title: 'I had a problem: It’s the writing that’s wrong',
  author: 'Tsuikkis',
  publishDate: 'Dec 4, 2018',
  readTimeMinutes: 4,
  keywords: 'Web Speech API, problem solving',
  category: 'problem/solution',

  BlogComponent: importedComponent(() => import('./post')),
}
