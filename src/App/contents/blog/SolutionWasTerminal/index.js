import importedComponent from 'react-imported-component'
import image from './i-had-a-problem.jpeg'

export default {
  title: 'I had a problem, and the solution was terminal',
  author: {
    name: 'Piispa',
    title: 'Software developer'
  },
  publishDate: 'August 7, 2019',
  readTimeMinutes: 3,
  keywords: 'javascript, hsl',
  category: 'technology',
  image: image,

  content: importedComponent(() => import('./post')),
}
