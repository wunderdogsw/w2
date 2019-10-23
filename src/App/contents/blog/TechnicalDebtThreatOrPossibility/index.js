import importedComponent from 'react-imported-component'
import image from './technical-dept.jpg'


export default {
  title: 'Technical Debt — Threat or Possibility',
  author: {
    name: 'Piispa & Vissy'
  },
  publishDate: 'Sep 18, 2018',
  readTimeMinutes: 3,
  keywords: 'software development, self-management',
  category: 'technology',
  image: image,

  content: importedComponent(() => import('./post')),
}
