import importedComponent from 'react-imported-component'
import image from './domain-driven-design.jpg'

export default {
  title: 'Domain Driven Design In Practice: An Isomorphic TypeScript Project (Part I)',
  author: {
    name: 'Guy Perkal',
    title: 'Software Consultant'
  },
  publishDate: 'Mar 17, 2020',
  readTimeMinutes: 7 ,
  keywords: 'engineering',
  category: 'engineering',
  image: image,

  content: importedComponent(() => import('./post')),
}
