import importedComponent from 'react-imported-component'
import image from './design-sprint-kampus.jpg'

export default {
  title: 'Taking learning digital',
  client: 'Sanoma Pro',
  publishDate: 'March 4, 2020',
  keywords: 'Design Sprints',
  image: image,

  content: importedComponent(() => import('./content')),
}
