import importedComponent from 'react-imported-component'
import image from './wdculture.jpeg'

export default {
  title: 'There is such thing as a free lunch and it comes with a whole bunch of other benefits',
  author: {
    name: 'Wunderdog',
    title: 'The Dog'
  },
  publishDate: 'Sep 26, 2019',
  readTimeMinutes: 3,
  keywords: 'culture, team, colleagues',
  category: 'culture',
  image: image,

  content: importedComponent(() => import('./post')),
}
