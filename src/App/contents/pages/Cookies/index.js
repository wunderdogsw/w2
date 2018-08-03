import React, { Fragment } from 'react'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Chapter from 'App/components/Chapter'
import TransitionLink from 'App/components/TransitionLink'


export default () => (
  <Fragment>
    <MainTitle className="centered">Cookies Policy</MainTitle>


    <Chapter>
      <h4>What cookies are used? </h4>
      <p>
        Cookies may be either "persistent" cookies or "session" cookies. A
        persistent cookie consists of a text file sent to a web browser, which
        will be stored by the browser and will remain valid until its specified
        expiry date (unless deleted by the user before the expiry date). A session
        cookie, on the other hand, will expire at the end of the user session,
        when the web browser is closed.
      </p>
      <p>
        We only use cookies necessary to run and improve our website experience.
        We use Google Analytics for this purpose and Google Analytics uses both
        persistent and session cookies.
      </p>
      <p>
        Here you can read more about
        {' '}
        <TransitionLink to="https://policies.google.com/privacy?hl=en-GB&amp;amp;amp;gl=uk">
          Googles Privacy Policy
        </TransitionLink>.
        {' '}
        If you wish to opt-out you can do that
        {' '}
        <TransitionLink to="https://tools.google.com/dlpage/gaoptout?hl=en">
          here
        </TransitionLink>.
      </p>
    </Chapter>

    <Chapter>
      <h4>How to Manage your Cookie Settings </h4>
      <p>
        You can deactivate the use of Google Analytics by following the links above.
        Most web browsers also allow you to manage cookies through the browser
        settings. By adjusting your web browser, you can avoid receiving cookies.
        The method used to block cookies will depend on the web browser used.
      </p>
      <p>
        To find out more about cookies, including how to view them, what cookies
        have been set and how to manage and delete them, visit
        {' '}
        <TransitionLink to="https://www.aboutcookies.org">
          www.aboutcookies.org
        </TransitionLink>
        {' '}
        or
        {' '}
        <TransitionLink to="https://www.allaboutcookies.org">
          www.allaboutcookies.org
        </TransitionLink>.
      </p>
    </Chapter>

    <Chapter>
      <h4>Contact</h4>
      <p>
        If you have any questions about our Cookie Policy,
        please contact us by email at
        {' '}
        <TransitionLink to="mailto:privacy@wunder.dog">
          privacy@wunder.dog
        </TransitionLink>.
      </p>
    </Chapter>





  </Fragment>
)
