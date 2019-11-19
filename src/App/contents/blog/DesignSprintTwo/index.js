import importedComponent from 'react-imported-component'
import image from './designsprint-hero.jpg'

export default {
  title: 'Design Sprint: Why, What For and What Not For? Pt2',
  author: {
    name: 'Wunderdog',
    title: 'The Dog'
  },
  publishDate: 'Mar 4, 2019',
  readTimeMinutes: 4 ,
  keywords: 'design sprint, service design',
  category: 'design',
  image: image,

  content: importedComponent(() => import('./post')),
}
