import BlockQuote from 'App/components/BlockQuote'
import Chapter from 'App/components/Chapter'
import React, { Fragment } from 'react'

export default () => (
  <Fragment>
    <Chapter>
      <p>
        As a teenager I used to play football (the American kind), mostly as a cornerback. It’s a defensive position
        whose responsibility is to prevent the offense from advancing on one’s side of the field, especially by passing
        the ball. I was told the position is one of the most ungrateful ones to play in the game; if you’re good, the
        offense avoids you and you’re almost invisible–to the untrained eyes of some spectators, at least–but if you
        screw up, the opposing team will most likely take advantage of that and your mistake becomes hard to miss.
      </p>
      <BlockQuote>
        "Most of one’s work is invisible to the world, happening behind the scenes–until somethings break. If you’re
        good, you’re almost invisible."
      </BlockQuote>
      <p>
        I’ve come to believe that developing applications or services is a lot like that as well. This is especially
        true and perhaps obvious if one is doing backend development. Most of one’s work is invisible to the world,
        happening behind the scenes–until somethings breaks, that is. After things go pear-shaped, the users of one’s
        services become painfully aware that something is broken. They may have problems making phone calls, their
        salaries might not make their way to their bank accounts, they may be unable to book flights or hotel rooms, or
        their browser might not show them their favorite cat videos anymore.
      </p>
      <p>
        But I believe the same applies–to a degree–to frontend development and UX design as well. I think a great
        application or service becomes kind of invisible to its user on all layers or levels, perhaps after some initial
        wow effect. It does this by staying out of the way and letting the user concentrate on the actual task at hand
        instead of the tool they’re using to achieve it.
      </p>
      <BlockQuote>
        "I think a great application or service becomes kind of invisible to its user on all layers or levels, perhaps
        after some initial wow effect."
      </BlockQuote>
      <p>
        After all, all services should exist to solve some actual problems. If they take the user’s attention away from
        the problem they’re most likely a hindrance rather than a help. So, how can that be avoided? In short, I believe
        the user experience should just be as smooth and effortless as possible. There is no one all-purpose solution to
        address this but the following are some examples that come to mind.
      </p>
      <p>
        In the case of an application, it all starts with quick installation without too many settings, questions or
        fillable forms. Power users will most likely appreciate plenty of configuration options but for most
        applications it should be possible to get them up and running quickly with some sane default settings. If
        setting up the application is too burdensome users may give up using it before they have even started properly.
      </p>
      <p>
        The same principle of demanding as little from the user as possible applies to using the application. All
        unnecessary steps and options should be avoided to keep the user’s focus on the main task. All actions the user
        really has to do should be logical and streamlined to avoid confusion. That is, if there are several steps the
        user has to take, they should be in logical order and if some information can be deduced from some already
        existing information, the user should not have to enter it manually.
      </p>
      <p>
        Also, there should be no unnecessary alerts or notifications or other distractions stealing the user’s
        attention. It’s good for the application to be transparent enough for the user to see what is happening and
        follow the progress of some operations but that kind of information should not be pushed aggressively at them,
        e.g. by flashing animated notifications on top of everything else or sending the user a tidal wave of automated
        emails
      </p>
      <p>
        The service should of course also be of high quality technically so that it works with as few errors as possible
        and is (almost) always available. Nothing stops the user’s flow better than a software crash with some obscure
        error message that leaves the user guessing if their work has been wasted and their information completely lost.
        But minor technical problems like the UI responding too slowly or a service returning no–or worse,
        wrong–information can also make the solving of a problem annoyingly hard if not impossible.
      </p>
      <BlockQuote>
        "The less the user has to think about the application or service when using it, the better."
      </BlockQuote>
      <p>
        When the user experience of an application or a service is logical and fluid–and thus kind of invisible–the
        user’s workflow stays smooth and undisturbed and they can probably solve their problem much faster than with a
        service that throws in some interruptions and causes confusion. The amount of time a user spends with a service
        before they successfully solve their problem is a good indicator of the quality of said service; the ideal
        optimum being the user doesn’t even have to open the application before it has already solved the problem for
        them. Which, by the way, would make the application or service invisible in yet another, very concrete way.
      </p>
      <p>
        Of course things are not always this straightforward. Especially with some backend services and tools–e.g.
        continuous integration software–the line between configuration and usage may not be clear-cut. And there are
        cases where giving the user a very limited set of options sometimes makes solving the problem at hand on a
        satisfactory level actually harder–e.g. in some search engines or booking services. Also, if a commercial
        application’s business model is based on ad revenue, it’s challenging to make it work without stealing the
        user’s attention and distracting them.
      </p>
      <p>
        Nevertheless, I find it a good rule of thumb that the less the user has to think about the application or
        service when using it, the better. This principle applies to all its layers, from the UI to the software running
        the service infrastructure. And I believe it also applies to most kinds of software, from web services to
        command line programs.
      </p>
      <p>
        In my short and modest football career I never reached the kind of invisibility I’m talking about. Far from it.
        But I believe as a software developer I’m doing better–and keep striving for that as-invisible-as-possible
        software on a daily basis.
      </p>
    </Chapter>
  </Fragment>
)
