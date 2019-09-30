import importedComponent from 'react-imported-component'

export default {
  title: 'Make Your Software as Invisible as Possible',
  author: 'Valde, founder/senior consultant',
  publishDate: 'Sep 18, 2019',
  readTimeMinutes: 5,
  keywords: 'software development, self-management',
  category: 'software development',

  BlogComponent: importedComponent(() => import('./post')),
}
