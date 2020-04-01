import importedComponent from 'react-imported-component'
import image from './news-hero-wunderdog.jpg'

export default {
  title: 'Helping relevant news travel faster',
  client: 'AI-driven content automation',
  publishDate: 'November 1, 2019',
  keywords: 'Full-stack development, Technology Lead',
  category: 'media',
  image: image,

  content: importedComponent(() => import('./content')),
}
