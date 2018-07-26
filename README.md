# WUNDERDOG 🦒

![Build status](https://api.travis-ci.com/thatsprettyfaroutman/w2.svg?branch=master)

React site with hardcoded content, no ssr, no cms

The point is to kiss. Easily hackable by anybody because everything is just code. No need to make complicated UIs for CMS integrations etc.


### Usage

* `yarn`
* `yarn dev` or `yarn dev --open` to magically open in browser
* Go to [localhost:1234](http://localhost:1234)


### Adding content

Create new content this needs to be written...


### Contributing

Make a pull request. Add Luffis as a reviewer. In case you made visual changes, also add Addu.


### Deployment

Changes to master will be deployed automatically via travis ci.

##### Manual deployment
* Create profile for `wunderdog-site` in your aws config file. Get credentials from 'aws-sandbox' account
* Running `deploy` script will make a new build and sync it to s3


### Todo

* The site
* Staging
* CI tuning so master isn't automatically deployed. Maybe use git tag or slack integration 😱
