import importedComponent from 'react-imported-component'
import image from './smartly-hero.png'

export default {
  title: 'Teamwork makes the dream work',
  client: 'Smartly.io',
  publishDate: 'Oct 18, 2019',
  keywords: 'DevOps',
  category: 'media',
  image: image,

  content: importedComponent(() => import('./content')),
}
