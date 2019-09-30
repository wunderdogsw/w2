import importedComponent from 'react-imported-component'

export default {
  title: 'We Do Wunders — Piispa, Developer',
  author: 'Piispa',
  publishDate: 'Jul 30, 2018',
  readTimeMinutes: 2,
  keywords: 'culture, Wunderdogs',
  category: 'biography',

  BlogComponent: importedComponent(() => import('./post')),
}
