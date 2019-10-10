import importedComponent from 'react-imported-component'
import image from './piispa.png'

export default {
  title: 'We Do Wunders — Piispa, Developer',
  author: 'Piispa',
  publishDate: 'Jul 30, 2018',
  readTimeMinutes: 2,
  keywords: 'culture, Wunderdogs',
  category: 'biography',
  image: image, 

  BlogComponent: importedComponent(() => import('./post')),
}
