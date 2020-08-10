import importedComponent from 'react-imported-component'
import image from './finbb-logo-wunderdog.jpg'

export default {
  title: 'Increasing the number of consenting adults',
  client: 'FinBB',
  publishDate: 'June 11, 2020',
  keywords: 'scrum, full-stack development',
  category: 'healthcare',
  image: image,

  content: importedComponent(() => import('./content')),
}
