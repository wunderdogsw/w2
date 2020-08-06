import importedComponent from 'react-imported-component'
import image from './kiti-wunderdog.jpg'

export default {
  title: 'I was supposed to be a math teacher but programming got me hooked by half-accident',
  author: {
    name: 'Kiti',
    title: 'Software engineer'
  },
  publishDate: 'Jun 6, 2019',
  readTimeMinutes: 4,
  keywords: 'culture, development',
  category: 'culture',
  image: image,

  content: importedComponent(() => import('./post')),
}
