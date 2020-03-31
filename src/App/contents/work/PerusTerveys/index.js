import importedComponent from 'react-imported-component'
import image from './perusterveys-hero.png'

export default {
  title: 'Feeling better about booking online',
  client: 'PerusTerveys',
  publishDate: 'Oct 18, 2019',
  keywords: 'Full-stack development, Service design',
  category: '',
  image: image,

  content: importedComponent(() => import('./content')),
}
