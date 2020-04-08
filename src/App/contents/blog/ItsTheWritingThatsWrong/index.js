import importedComponent from 'react-imported-component'
import image from './wrongwriting.png'

export default {
  title: 'I had a problem: It’s the writing that’s wrong',
  author: {
    name: 'Ville Komulainen',
    title: 'COO & founder'
  },
  publishDate: 'Dec 4, 2018',
  readTimeMinutes: 4,
  keywords: 'Web Speech API, problem solving',
  category: 'technology',
  image: image,

  content: importedComponent(() => import('./post')),
}
