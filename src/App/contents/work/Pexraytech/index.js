import importedComponent from 'react-imported-component'
import image from './pexraytech-hero.png'

export default {
  title: 'X-pertise on time and on budget',
  client: 'Pexraytech',
  publishDate: 'Oct 18, 2019',
  keywords: 'UX design, UX development',
  category: 'healthcare',
  image: image,

  content: importedComponent(() => import('./content')),
}
