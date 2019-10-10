import importedComponent from 'react-imported-component'
import image from './losing-control-hero.png'

export default {
  title: 'I had a problem: I keep losing control',
  author: 'Manu',
  publishDate: 'April 1, 2019',
  readTimeMinutes: 2,
  keywords: 'javascript, HTTP, problem solving',
  category: 'problem/solution',
  image: image,

  BlogComponent: importedComponent(() => import('./post')),
}
