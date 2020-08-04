import importedComponent from 'react-imported-component'
import image from './Barona-virtuaalitulkki-wunderdog1.png'

export default {
  title: 'Generating business asset by boosting payroll efficiency',
  client: 'Barona Logistiikka',
  publishDate: 'May 31, 2020',
  keywords: 'Design Sprints',
  category: 'retail',
  image: image,

  content: importedComponent(() => import('./content')),
}
