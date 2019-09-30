import importedComponent from 'react-imported-component'

export default {
  title: 'We do Wunders — Kiti, Developer',
  author: 'Kiti',
  publishDate: 'Jun 6, 2019',
  readTimeMinutes: 4,
  keywords: 'culture, development',
  category: 'biography',

  BlogComponent: importedComponent(() => import('./post')),
}
