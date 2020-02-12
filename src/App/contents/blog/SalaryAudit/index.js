import importedComponent from 'react-imported-component'
import image from './salary-audit.jpg'

export default {
  title: 'We reported ourselves to equality consultants',
  author: {
    name: 'Meri-Tuuli',
    title: 'People Operations Lead'
  },
  publishDate: 'Dec 13, 2019',
  readTimeMinutes: 2,
  keywords: 'people operations, culture, equality',
  category: 'culture',
  image: image,

  content: importedComponent(() => import('./post')),
}
