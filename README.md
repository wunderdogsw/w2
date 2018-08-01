# WUNDERDOG 🦒

![Build status](https://api.travis-ci.com/wunderdogsw/w2.svg?branch=master)

React site with hardcoded content, no ssr, no cms

The point is to [kiss](https://gph.is/XIGARm). Easily hackable by anybody because everything is hardcoded. No need to make complicated UIs for CMS integrations etc.


### Usage

* `yarn`
* `yarn dev` or `yarn dev --open` to magically open in browser
* Go to [localhost:1234](http://localhost:1234)


### Contributing

Make a pull request. Add @thatsprettyfaroutman or @niutski as a reviewer. In case you made visual changes, show them to Addu.
Additional info @ [wunderwiki](https://wunderdog.atlassian.net/wiki/spaces/WD/pages/265781254/www.wunder.dog+-+our+new+interwebs)


### Deployment

Site lives in amazon s3 bucket and uses cloudfront CDN.
Changes to master will be deployed automatically via travis ci.


### Todo

* Staging
* CI tuning so master isn't automatically deployed. Maybe use git tag or slack integration 😱
* Guide: How to create content ( for non-developers ).
* Map Ga to existing account


### Known issues

* No server side rendering. Might cause problems when sharing links to facebook etc.
* No ie support, because we like to keep things simple. Edge works fine. According to our analytics barely anyone uses ie anyway.

