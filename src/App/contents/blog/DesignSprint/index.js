import importedComponent from 'react-imported-component'
import image from './designsprint-hero.jpg'

export default {
  title: 'Design Sprint: Why, What For and What Not For? Pt1',
  author: {
    name: 'Wunderdog',
    title: 'The Dog'
  },
  publishDate: 'Mar 4, 2019',
  readTimeMinutes: 7 ,
  keywords: 'design sprint, service design',
  category: 'design',
  image: image,

  content: importedComponent(() => import('./post')),
}
