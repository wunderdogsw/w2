import importedComponent from 'react-imported-component'
import image from './HoneypotCult-Wunderdog1.jpg'

export default {
  title: 'Giving content managers full ownership with Contentful',
  client: 'Honeypot',
  publishDate: 'July 9, 2020',
  keywords: 'scrum',
  category: 'consumers, media',
  image: image,
  content: importedComponent(() => import('./content'))
}
