import importedComponent from 'react-imported-component'
import image from './iiro.jpeg'

export default {
  title: 'My work practice program at Wunderdog',
  author: {
    name: 'Iiro',
    title: '9th grader from junior high school'
  },
  publishDate: 'Oct 17, 2019',
  readTimeMinutes: 2,
  keywords: 'work practice program',
  category: 'culture',
  image: image,

  content: importedComponent(() => import('./post')),
}
