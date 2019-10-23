import importedComponent from 'react-imported-component'
import image from './blueprint-hero.png'

export default {
  title: 'Collaboration is in our DNA',
  client: 'Blueprint Genetics',
  publishDate: 'Oct 18, 2019',
  keywords: 'scrum, full-stack development',
  image: image,

  content: importedComponent(() => import('./content')),
}
