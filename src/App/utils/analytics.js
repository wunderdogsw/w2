import ga from 'react-ga'
import noop from 'lodash.noop'
import Cookies from 'js-cookie'
import { ALLOW_COOKIES } from '../constants'

export const okToTrack = (() => {
  let inited = false
  return () => {
    // ALLOW_COOKIES is set in CookieMonster component
    if ( Cookies.get(ALLOW_COOKIES) === '0' ) return false
    if ( inited ) return true

    ga.initialize('UA-58343009-1', {
      anonymizeIp: true,
    })
    inited = true
    return true
  }
})()


export const pageview = url => {
  if ( !okToTrack() ) return
  url = url || window.location.pathname + window.location.search
  ga.pageview(url)
}

export const event = (...args) => {
  if ( !okToTrack() ) return
  ga.event(...args)
}
export const outboundLink = e => {
  if ( !okToTrack() ) return

  // React ga thinks that links with @ are email adresses and might ignore them
  // Medium links may contain @ characters sooooooo...
  // replace
  if (e.label) e.label = e.label.replace('@', '(at)')

  ga.outboundLink(e, noop)
}
