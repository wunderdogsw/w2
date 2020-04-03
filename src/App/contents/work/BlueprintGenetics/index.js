import importedComponent from 'react-imported-component'
import image from './blueprint-hero.png'

export default {
  title: 'Collaboration is in our DNA',
  client: 'Blueprint Genetics',
  publishDate: 'Feb 21, 2020',
  keywords: 'scrum, full-stack development',
  category: 'healthcare',
  image: image,

  content: importedComponent(() => import('./content')),
}
