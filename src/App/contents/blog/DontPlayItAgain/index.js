import importedComponent from 'react-imported-component'
import image from './dont-play.jpeg'

export default {
  title: 'I had a problem: Don’t play it again, Sam!',
  author: {
    name: 'Kapu',
    title: 'Software developer'
  },
  publishDate: 'Mar 4, 2019',
  readTimeMinutes: 4,
  keywords: 'javascript, HTTP, problem solving',
  category: 'technology',
  image: image,

  content: importedComponent(() => import('./post')),
}
