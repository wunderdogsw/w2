import importedComponent from 'react-imported-component'
import image from './pomo-developer-wunderdog.jpg'

export default {
  title: 'I actually consider the computer as my current main musical instrument',
  author: {
    name: 'Pomo',
    title: 'Software developer'
  },
  publishDate: 'May 3, 2019',
  readTimeMinutes: 4,
  keywords: 'culture, Berlin',
  category: 'culture',
  image: image,

  content: importedComponent(() => import('./post')),
}
