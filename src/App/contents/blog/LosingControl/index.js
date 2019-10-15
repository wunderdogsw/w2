import importedComponent from 'react-imported-component'
import image from './losing-control-hero.png'

export default {
  title: 'I had a problem: I keep losing control',
  author: {
    name: 'Manu',
    title: 'Software developer'
  },
  publishDate: 'April 1, 2019',
  readTimeMinutes: 2,
  keywords: 'javascript, HTTP, problem solving',
  category: 'technology',
  image: image,

  BlogComponent: importedComponent(() => import('./post')),
}
