import importedComponent from 'react-imported-component'

export default {
  title: 'We do Wunders — Hunttis, Coder',
  author: 'Hunttis',
  publishDate: 'Jan 21, 2019',
  readTimeMinutes: 3,
  keywords: 'culture, development',
  category: 'biography',

  BlogComponent: importedComponent(() => import('./post')),
}
