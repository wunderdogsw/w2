import importedComponent from 'react-imported-component'
import image from './iiro.jpeg'

export default {
  title: 'My expectations vs. reality about the work practice programme at Wunderdog',
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
