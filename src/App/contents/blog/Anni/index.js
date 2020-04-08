import importedComponent from 'react-imported-component'
import image from './anni.jpg'

export default {
  title: 'My feelings about the work practice programme at Wunderdog',
  author: {
    name: 'Anni',
    title: '9th grader from junior high school'
  },
  publishDate: 'Oct 16, 2019',
  readTimeMinutes: 2,
  keywords: 'art, design, work practice program',
  category: 'culture',
  image: image,

  content: importedComponent(() => import('./post')),
}
