import importedComponent from 'react-imported-component'
import image from './someturva-hero.jpg'

export default {
  title: 'Delivering justice for young people online',
  client: 'Someturva',
  publishDate: 'November 14, 2019',
  keywords: 'React, UX Design',
  category: 'startups, healthcare, consumers',
  image: image,

  content: importedComponent(() => import('./content')),
}
