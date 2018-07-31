import ga from 'react-ga'

const currentUrl = window.location.pathname + window.location.search

ga.initialize('UA-123083535-1')
ga.pageview(currentUrl)
ga.event({
  category: 'User landed',
  action: `${ currentUrl }`,
})

export const pageview = url => {
  url = url || window.location.pathname + window.location.search
  ga.pageview(url)
}

export const event = e => {
  ga.event(e)
}
