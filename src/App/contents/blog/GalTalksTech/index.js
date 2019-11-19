import importedComponent from 'react-imported-component'
import image from './alma.jpeg'

export default {
  title: 'Joanna in Gal Talks Tech',
  author: {
    name: 'Joanna',
    title: 'Country Lead of Wunderdog GmbH'
  },
  publishDate: 'Sep 18, 2019',
  readTimeMinutes: 8 ,
  keywords: 'women in tech, leadership, culture',
  category: 'culture',
  image: image,

  content: importedComponent(() => import('./post')),
}
