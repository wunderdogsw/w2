import importedComponent from 'react-imported-component'

export default {
  title: 'Pair Programming — Uncharted Territories — Part I',
  author: 'Piispa & Vissy',
  publishDate: 'Feb 13, 2019',
  readTimeMinutes: 4,
  keywords: 'programming, teamwork',
  category: 'software development',

  BlogComponent: importedComponent(() => import('./post')),
}
