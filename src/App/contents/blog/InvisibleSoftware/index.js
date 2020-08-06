import importedComponent from 'react-imported-component'
import image from './invisible-code-wunderdog.jpg'

export default {
  title: 'Make your software as invisible as possible',
  author: {
    name: 'Mika Viljanen',
    title: 'Senior consultant & founder'
  },
  publishDate: 'Sep 18, 2018',
  readTimeMinutes: 5,
  keywords: 'software development, self-management',
  category: 'technology',
  image: image,

  content: importedComponent(() => import('./post')),
}
