![Wunderdog](https://avatars1.githubusercontent.com/u/8065613?s=200&v=4)


![Build status](https://api.travis-ci.com/wunderdogsw/w2.svg?branch=master)

React site with hardcoded content, no ssr, no cms

The point is to [kiss](https://gph.is/XIGARm). 
Easily hackable by anybody because everything is hardcoded. 
No need to make complicated UIs for CMS integrations etc.


### Usage

* `yarn`
* `yarn dev` or `yarn dev --open` to magically open in browser
* Go to [localhost:1234](http://localhost:1234)


### Contributing

Make a pull request. Add @thatsprettyfaroutman or @niutski as a reviewer. In case you made visual changes, show them to Addu.
Additional info @ [wunderwiki](https://wunderdog.atlassian.net/wiki/spaces/WD/pages/265781254/www.wunder.dog+-+our+new+interwebs)


### Deployment

Site lives in amazon s3 bucket and uses cloudfront CDN.
Changes to master will be deployed automatically via [Travis CI](https://travis-ci.com/wunderdogsw/w2).


### Todo

* Staging
* CI tuning so master isn't automatically deployed. Maybe use git tag or slack integration 😱
* Guide: How to create content ( for non-developers )
* 301 redirects from old site
* Lynx support
* Clear old files from s3 when releaseing new build


### Known issues

* No server side rendering. Might cause problems when sharing links to facebook etc.
* No ie support, because we like to keep things simple. Edge works fine. According to our analytics barely anyone uses ie anyway.


### App dirs

#### components
Contains react components. Most of them are cosmetic only adding styles to items in contents dir.

#### constats
Contains constants used throught the app

#### contents
Contains dynamically loaded components with all the actual content of the site. These are usually wrapped in components found in components dir. JSX Example:
```
import Hero from 'App/components/Hero'
import { Hero as Content } from 'App/contents/other/Hero'

export default () => (
  <div className="SomeContainer">
    <Hero>
      <Content />
    </Hero>
  </div>  
)
```

Hero component adds the css styling to dynamically loaded Content

#### external
Contains helper functions for fetching external data, blog posts and such.

#### routes
Contains main routes or views. There is only two atm. `Home` is the landing page and everythign else is just `Page`

#### state
Contains app state. Its made with react context api and is provided via hoc to the components that need it.

#### utils
Contains utility functions



### Css

Main tag styles are found in root css file: `src/index.css`. Rest of the styles are written so that each component have their own styles. Positioning of the components are overriden in components found in routes dir. Each component try to fill as much space as they are allowed by their container component.



