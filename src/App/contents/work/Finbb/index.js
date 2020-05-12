import importedComponent from 'react-imported-component'
import image from './FinBB-Wunderdog-Covid.jpg'

export default {
  title: 'Increasing the number of consenting adults',
  client: 'FinBB',
  publishDate: 'March 31, 2020',
  keywords: 'scrum, full-stack development',
  category: 'healthcare',
  image: image,

  content: importedComponent(() => import('./content')),
}
