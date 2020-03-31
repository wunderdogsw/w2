import importedComponent from 'react-imported-component'
import image from './news-hero-wunderdog.jpg'

export default {
  title: 'Helping relevant news travel faster',
  client: 'Content automation',
  publishDate: 'November 1, 2019',
  keywords: 'Full-stack development, Technology Lead',
  image: image,

  content: importedComponent(() => import('./content')),
}
