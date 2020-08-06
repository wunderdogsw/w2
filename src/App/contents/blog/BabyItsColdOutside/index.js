import importedComponent from 'react-imported-component'
import image from './its-cold-outside-wunderdog.jpg'

export default {
  title: 'I had a problem: Baby, it\'s cold outside!',
  author: {
    name: 'Luffis',
    title: 'Software developer'
  },
  publishDate: 'Mar 4, 2019',
  readTimeMinutes: 3,
  keywords: 'Rasberry Pi, JavaScript, Linux, problem-solving',
  category: 'technology',
  image: image,

  content: importedComponent(() => import('./post')),
}
