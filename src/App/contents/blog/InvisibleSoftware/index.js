import importedComponent from 'react-imported-component'
import image from './invisible.jpeg'

export default {
  title: 'Make Your Software as Invisible as Possible',
  author: {
    name: 'Valde',
    title: 'Senior consultant & founder'
  },
  publishDate: 'Sep 18, 2019',
  readTimeMinutes: 5,
  keywords: 'software development, self-management',
  category: 'technology',
  image: image,

  BlogComponent: importedComponent(() => import('./post')),
}
