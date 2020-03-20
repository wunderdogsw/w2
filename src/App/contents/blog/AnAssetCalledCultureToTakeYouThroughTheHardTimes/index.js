import importedComponent from 'react-imported-component'
import image from './Seiskavisa-Wunderdog-office.jpg'

export default {
  title: 'Home office day 7: an asset called culture to take you through the hard times',
  author: {
    name: 'Wunderdog',
    title: 'Wunderdog'
  },
  publishDate: 'March 20, 2020',
  readTimeMinutes: 7,
  keywords: 'culture, remote work',
  category: 'culture',
  image: image, 

  content: importedComponent(() => import('./post')),
}
