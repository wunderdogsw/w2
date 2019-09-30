import importedComponent from 'react-imported-component'

export default {
  title: 'I had a problem: Don’t play it again, Sam!',
  author: 'Luffis',
  publishDate: 'Mar 4, 2019',
  readTimeMinutes: 3,
  keywords: 'Rasberry Pi, JavaScript, Linux, problem-solving',
  category: 'problem/solution',

  BlogComponent: importedComponent(() => import('./post')),
}
