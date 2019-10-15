import importedComponent from 'react-imported-component'
import image from './piispa.png'

export default {
  title: 'We Do Wunders — Piispa, Developer',
  author: {
    name: 'Piispa',
    title: 'Software developer'
  },
  publishDate: 'Jul 30, 2018',
  readTimeMinutes: 2,
  keywords: 'culture, Wunderdogs',
  category: 'culture',
  image: image,

  BlogComponent: importedComponent(() => import('./post')),
}
