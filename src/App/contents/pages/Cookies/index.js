import React, { Fragment } from 'react'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Indent from 'App/components/Indent'
import Chapter from 'App/components/Chapter'
import TransitionLink from 'App/components/TransitionLink'


export default () => (
  <Fragment>
    <MainTitle>Cookies Policy</MainTitle>

    <Indent>
      <Chapter>
        <h2>What cookies are used? </h2>
        <p>
          We only use cookies to improve our website experience. Cookies may be
          either "persistent" cookies or "session" cookies. A persistent cookie
          consists of a text file sent to a web browser, which will be stored by
          the browser and will remain valid until its specified expiry date (unless
          deleted by the user before the expiry date). A session cookie, on the
          other hand, will expire at the end of the user session, when the web
          browser is closed. Cookies are small text files that a browser saves on
          your device and they are used, for example, when a service wants to save
          your information when moving from one website to another. If you do not
          want to use cookies, you can change your cookie settings at any time in
          your browser. Please note that disabling cookies might impact the how
          our website functions.
        </p>
        <p>
          When you access our website, we ask for your consent to allow us to store
          the following cookies on your device:
        </p>
        <p>
          <b>Google Analytics</b> – We use Google Analytics to collect information about
          how users behave on our website. We use the information to compile
          reports and to help us improve the site. These cookies collect the number
          of visitors to the website, where visitors have come to the website
          from and the pages they visited. You can read more about these cookies
          and how Google safeguard them here.
        </p>
        <p>
          <b>Twitter Analytics</b> – We use Twitter Analytics to measure Twitter campaign
          efficiency.
        </p>
        <p>
          <b>Facebook pixel</b> – We use Facebook Pixel to measure, optimize and build
          audiences for our advertising campaigns served on Facebook. It allows
          us to see how users move between devices when accessing our website and
          Facebook and targeting Facebook advertising to users most likely
          interested in such advertising by analyzing which content the user has
          viewed on our website. For more information about Facebook Pixel,
          please see here.
        </p>
        <p>
          <b>Reddit</b> – We use Reddit Analytics to measure Reddit campaign efficiency.
        </p>
        <p>
          <b>LinkedIn Insights</b> – We use LinkedIn Insights to measure LinkedIn campaign
          efficiency.
        </p>
        <p>
          <b>Hubspot</b> – We use Hubspot to analyze the use of our website, administer
          the website and track users’ movements around the website. We also use
          Hubspot for tracking our email marketing. For more information about
          Hubspot, please see here.
        </p>
        <p>
          <b>Hotjar</b> – We use Hotjar in order to optimize this service and
          experience. Hotjar uses cookies and other technologies to collect data
          on our users’ behavior and their devices (in particular device's IP
          address (captured and stored only in anonymized form), device screen
          size, device type (unique device identifiers), browser information,
          geographic location (country only), preferred language used to display
          our website). Hotjar stores this information in a pseudonymized user
          profile. Neither Hotjar nor we will ever use this information to
          identify individual users or to match it with further data on an
          individual user. For further details, please see Hotjar’s privacy
          {' '}
          <TransitionLink to="https://www.hotjar.com/legal/policies/privacy">
            here.
          </TransitionLink>.
          {' '}
          You can opt-out to the creation of a user profile, Hotjar’s storing of
          data about your usage of our site and Hotjar’s use of tracking cookies
          on other websites
          {' '}
            <TransitionLink to="https://www.hotjar.com/legal/compliance/opt-out">
              here.
            </TransitionLink>
          {' '}
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
        <h2>How to Manage your Cookie Settings </h2>
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
        <h2>Contact</h2>
        <p>
          If you have any questions about our Cookie Policy,
          please contact us by email at
          {' '}
          <TransitionLink to="mailto:privacy@wunder.dog">
            privacy@wunder.dog
          </TransitionLink>.
        </p>
      </Chapter>
    </Indent>




  </Fragment>
)
