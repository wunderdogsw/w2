import importedComponent from 'react-imported-component'
import image from './smartum-wunderdog.jpg'

export default {
  title: 'Adding more benefits to employee benefits',
  client: 'Smartum',
  publishDate: 'August 12, 2020',
  keywords: 'scrum, full-stack development',
  category: 'consumers',
  image: image,

  content: importedComponent(() => import('./content')),
}
