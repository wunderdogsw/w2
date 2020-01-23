import importedComponent from 'react-imported-component'
import image from './someturva-hero.jpg'

export default {
  title: 'Delivering justice for young people online',
  client: 'Somebuddy',
  publishDate: 'November 14, 2019',
  keywords: 'React, UX Design',
  image: image,

  content: importedComponent(() => import('./content')),
}
