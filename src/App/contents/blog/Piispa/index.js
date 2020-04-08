import importedComponent from 'react-imported-component'
import image from './piispa.png'

export default {
  title: 'Fresh git, shiny stack, getting things done & mega cool pöhinä',
  author: {
    name: 'Piispa',
    title: 'Software developer'
  },
  publishDate: 'Jul 30, 2018',
  readTimeMinutes: 2,
  keywords: 'culture, Wunderdogs',
  category: 'culture',
  image: image,

  content: importedComponent(() => import('./post')),
}
