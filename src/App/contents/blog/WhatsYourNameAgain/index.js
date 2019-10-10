import importedComponent from 'react-imported-component'
import image from './your-name.jpg'

export default {
  title: 'I had a problem: What’s your name again?',
  author: 'Paco',
  publishDate: 'Dec 4, 2018',
  readTimeMinutes: 2,
  keywords: 'Open-source project, culture , problem solving',
  category: 'problem/solution',
  image: image,

  BlogComponent: importedComponent(() => import('./post')),
}
