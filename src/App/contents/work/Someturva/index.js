import importedComponent from 'react-imported-component'
import image from './someturva-hero.jpg'

export default {
  title: 'Delivering justice for young people online',
  client: 'Someturva',
  publishDate: 'April 1, 2020',
  keywords: 'React, UX Design',
  category: 'startups, healthcare, consumers',
  image: image,

  content: importedComponent(() => import('./content')),
}
