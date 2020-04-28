import importedComponent from 'react-imported-component'
import image from './clean-code-wunderdog1.jpg'

export default {
  title: 'Cutting Company Costs with Clean Code',
  author: {
    name: 'Mostafa Shawki',
    title: 'Service Designer'
  },
  publishDate: 'April 28, 2020',
  readTimeMinutes: 4,
  keywords: 'software development',
  category: 'technology',
  image: image,

  content: importedComponent(() => import('./post')),
}
