import importedComponent from 'react-imported-component'

export default {
  title: 'We do wunders — Pomo, developer',
  author: 'Pomo',
  publishDate: 'May 3, 2019',
  readTimeMinutes: 4,
  keywords: 'culture, Berlin',
  category: 'biography',

  BlogComponent: importedComponent(() => import('./post')),
}
