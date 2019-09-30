import importedComponent from 'react-imported-component'

export default {
  title: 'Technical Debt — Threat or Possibility',
  author: 'Piispa & Vissy, software developers',
  publishDate: 'Sep 18, 2019',
  readTimeMinutes: 3,
  keywords: 'software development, self-management',
  category: 'software development',

  BlogComponent: importedComponent(() => import('./post')),
}
