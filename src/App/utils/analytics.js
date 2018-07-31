import ga from 'react-ga'
import noop from 'lodash.noop'

const currentUrl = window.location.pathname + window.location.search

ga.initialize('UA-123083535-1')
ga.pageview(currentUrl)
ga.event({
  category: 'User',
  action: `Landed on: ${ currentUrl }`,
})

export const pageview = url => {
  url = url || window.location.pathname + window.location.search
  ga.pageview(url)
}

export const event = ga.event
export const outboundLink = e => {
  ga.outboundLink(e, noop)
}
