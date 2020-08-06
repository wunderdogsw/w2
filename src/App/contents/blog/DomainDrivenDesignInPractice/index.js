import importedComponent from 'react-imported-component'
import image from './domain-driven-design-wunderdog.jpg'

export default {
  title: 'Domain Driven Design In Practice: An Isomorphic TypeScript Project (Part I)',
  author: {
    name: 'Guy Perkal',
    title: 'Software Consultant'
  },
  publishDate: 'Feb 21, 2020',
  readTimeMinutes: 3 ,
  keywords: 'software, engineering',
  category: 'engineering',
  image: image,

  content: importedComponent(() => import('./post')),
}
