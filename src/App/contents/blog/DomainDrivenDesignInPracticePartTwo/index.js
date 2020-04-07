import importedComponent from 'react-imported-component'
import image from './domain-driven-design2.jpg'

export default {
  title: 'Domain Driven Design In Practice: An Isomorphic TypeScript Project (Part II)',
  author: {
    name: 'Pyry Kovanen',
    title: 'Berlin’s Technology Lead and Software Consultant'
  },
  publishDate: 'Feb 22, 2020',
  readTimeMinutes: 3 ,
  keywords: 'software, engineering',
  category: 'engineering',
  image: image,

  content: importedComponent(() => import('./post')),
}
