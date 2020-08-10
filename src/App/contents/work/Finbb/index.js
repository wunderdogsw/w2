import importedComponent from 'react-imported-component'
import image from './finbb-wunderdog2.jpg'

export default {
  title: 'Increasing the number of consenting adults',
  client: 'FinBB',
  publishDate: 'June 11, 2020',
  keywords: 'scrum, full-stack development',
  category: 'consumers, media',
  image: image,

  content: importedComponent(() => import('./content')),
}
