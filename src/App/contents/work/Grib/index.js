import importedComponent from 'react-imported-component'
import image from './grib-hero.jpg'

export default {
  title: 'Kickstarting creativity in three dimensions',
  client: 'Grib3D',
  publishDate: 'January 17, 2020',
  keywords: 'Full-stack development, Technology Lead',
  image: image,

  content: importedComponent(() => import('./content')),
}
