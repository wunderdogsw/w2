import ga from 'react-ga'
import noop from 'lodash.noop'

const currentUrl = window.location.pathname + window.location.search

ga.initialize('UA-123083535-1')
ga.pageview(currentUrl)

export const pageview = url => {
  url = url || window.location.pathname + window.location.search
  ga.pageview(url)
}

export const event = ga.event
export const outboundLink = e => {

  // React ga thinks that links with @ are email adresses and might ignore them
  // Medium links may contain @ characters sooooooo...
  // replace
  if (e.label) e.label = e.label.replace('@', '(at)')

  ga.outboundLink(e, noop)
}
