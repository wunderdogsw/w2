import importedComponent from 'react-imported-component'
import image from './hank.png'

export default {
  title: 'We Do Wunders — Hank, Team Lead aka Lassie',
  author: 'Hank',
  publishDate: 'Jul 30, 2018',
  readTimeMinutes: 3,
  keywords: 'culture, Wunderdogs',
  category: 'biography',
  image: image,

  BlogComponent: importedComponent(() => import('./post')),
}
