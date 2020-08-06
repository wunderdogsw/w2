import importedComponent from 'react-imported-component'
import image from './Ville-Heikkinen-Wunderdog.jpg'

export default {
  title: 'A Bespoke TypeScript Presentation',
  author: {
    name: 'Ville Heikkinen',
    title: 'Senior Developer'
  },
  publishDate: 'Dec 17, 2019',
  readTimeMinutes: 6,
  keywords: 'TypeScript, presentation, live coding',
  category: 'technology',
  image: image,

  content: importedComponent(() => import('./post')),
}
