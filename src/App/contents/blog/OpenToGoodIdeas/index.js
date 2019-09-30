import importedComponent from 'react-imported-component'

export default {
  title: 'Open to good ideas',
  author: 'Wunderdog',
  publishDate: 'Dec 4, 2018',
  readTimeMinutes: 2,
  keywords: 'Open-source project, culture , problem solving',
  category: 'software development',

  BlogComponent: importedComponent(() => import('./post')),
}
