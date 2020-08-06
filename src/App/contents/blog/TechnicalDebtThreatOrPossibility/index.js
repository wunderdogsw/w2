import importedComponent from 'react-imported-component'
import image from './wunderdog-office-helsinki.jpg'


export default {
  title: 'Technical debt — threat or possibility',
  author: {
    name: 'Piispa & Vissy'
  },
  publishDate: 'Sep 18, 2018',
  readTimeMinutes: 3,
  keywords: 'software development, self-management',
  category: 'technology',
  image: image,

  content: importedComponent(() => import('./post')),
}
