import importedComponent from 'react-imported-component'
import image from './AngryBirdsFriends-Wunderdog.jpg'

export default {
  title: 'Cleaning up the bugs for some friendly angry birds',
  client: 'Rovio',
  publishDate: 'July 11, 2020',
  keywords: 'scrum, full-stack development',
  category: 'consumers, media',
  image: image,

  content: importedComponent(() => import('./content')),
}
