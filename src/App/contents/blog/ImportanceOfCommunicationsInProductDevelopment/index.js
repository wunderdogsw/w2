import importedComponent from 'react-imported-component'

export default {
  title: 'The Importance of Communications in Product Development',
  author: 'Tsuikkis, COO & founders',
  publishDate: 'Sep 18, 2018',
  readTimeMinutes: 5,
  keywords: 'product development, teamwork, communication',
  category: 'product development',

  BlogComponent: importedComponent(() => import('./post')),
}
