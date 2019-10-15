import importedComponent from 'react-imported-component'
import image from './control-freak.png'

export default {
  title: 'I had a problem: I’m a control freak and I think I like it',
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
