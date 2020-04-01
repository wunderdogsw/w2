import importedComponent from 'react-imported-component'
import image from './alma-hero.jpg'

export default {
  title: 'The chemistry of continuous cooperation',
  client: 'Alma Media',
  publishDate: 'February 18, 2020',
  keywords: 'Full-stack development, Technology Lead',
  category: 'media',
  image: image,

  content: importedComponent(() => import('./content')),
}
