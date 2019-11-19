import importedComponent from 'react-imported-component'
import image from './designsprint-hero.jpg'

export default {
  title: 'Design Sprint: Why, What For and What Not For? Pt3',
  author: {
    name: 'Wunderdog',
    title: 'The Dog'
  },
  publishDate: 'Mar 4, 2019',
  readTimeMinutes: 3 ,
  keywords: 'design sprint, service design',
  category: 'design',
  image: image,

  content: importedComponent(() => import('./post')),
}
