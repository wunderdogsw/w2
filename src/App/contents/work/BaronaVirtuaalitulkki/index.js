import importedComponent from 'react-imported-component'
import image from './design-sprint-kampus.jpg'

export default {
  title: 'Generating business asset by boosting payroll efficiency',
  client: 'Barona Logistiikka',
  publishDate: 'May 315, 2020',
  keywords: 'Design Sprints',
  category: 'retail',
  image: image,

  content: importedComponent(() => import('./content')),
}
