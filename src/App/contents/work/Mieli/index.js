import importedComponent from 'react-imported-component'
import image from './mieli-hero.jpg'

export default {
  title: 'Keeping data in mind',
  client: 'MIELI - Mental Health Finland',
  publishDate: 'October 21, 2019',
  keywords: 'Service Design, UI Design, Full-stack development',
  image: image,

  content: importedComponent(() => import('./content')),
}
