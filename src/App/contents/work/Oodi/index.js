import importedComponent from 'react-imported-component'
import image from './oodi-hero.jpg'

export default {
  title: 'An ode to the city',
  client: 'Oodi, Central Library',
  publishDate: 'March 31, 2020',
  keywords: 'React, Unity, UI Design, UX Design',
  category: 'consumers',
  image: image,
  videoMuteToggle: true,
  video: 'https://player.vimeo.com/external/367229931.hd.mp4?s=6faefa1e64c251f188570b52723e51207ffebeff&profile_id=175',

  content: importedComponent(() => import('./content')),
}
