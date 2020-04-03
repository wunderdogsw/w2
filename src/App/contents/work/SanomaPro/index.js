import importedComponent from 'react-imported-component'
import image from './design-sprint-kampus.jpg'

export default {
  title: 'Taking learning digital',
  client: 'Sanoma Pro',
  publishDate: 'April 3, 2020',
  keywords: 'Design Sprints',
  category: 'media',
  image: image,

  content: importedComponent(() => import('./content')),
}
