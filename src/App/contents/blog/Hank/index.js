import importedComponent from 'react-imported-component'
import image from './Juho-wunderdog.jpg'

export default {
  title: 'Without these skills even the best code wizard wouldn’t get along',
  author: {
    name: 'Hank',
    title: 'Team lead'
  },
  publishDate: 'Jul 30, 2018',
  readTimeMinutes: 3,
  keywords: 'culture, Wunderdogs',
  category: 'culture',
  image: image,

  content: importedComponent(() => import('./post')),
}
