import BlockQuote from 'App/components/BlockQuote'
import Chapter from 'App/components/Chapter'
import Image from 'App/components/Image'
import React, { Fragment } from 'react'
import heroThumb from './hunttis-thumb.jpg'
import hero from './hunttis.jpeg'

export default () => (
  <Fragment>
    <Image thumbSrc={heroThumb} src={hero} alt='Hunttis' />
    <Chapter>
      <p>
        <i>
          Wunderdog looks and feels like the Doggos that work at Wunderdog. We wanted them to tell you in their own
          words who they are and what they do!
        </i>
      </p>
    </Chapter>
    <BlockQuote>
      “Coding is like digital carpentry: You nail pieces together for a while and ta-daa, you’ve made yourself a web
      service or maybe a soapbox car!”
    </BlockQuote>
    <Chapter>
      <p>
        Hi! My name is Ville, I’m a 38-year-old coder originally from the capital of Tango but have since moved to the
        big city, Helsinki! Already as a kid, I wrote Basic on the Commodore 64 and Turbo Pascal on old PCs. Later in
        the Polytechnic, I took a class called “Mobile development” where we made our very own game on mobile Java.
        That’s when the spark really lit a fire that’s kept on growing!
      </p>
      <p>
        Before Wunderdog I worked for a Finnish game company, Rovio. I decided to try something else and in 2015 almost
        made into the first 10 employees of Wunderdog!
      </p>
      <p>
        My weeks as a consultant include planning, improving stuff, and writing new features to both the back-end and
        front-end of the application. The current project also includes things like build and test automation, helping
        improve the quality of life for everyone involved! The majority of the week is spent at the customer’s office
        but on Fridays, all Doggos gather to work at Wuffice, where we can exchange information and ask for help from
        colleagues who work on different projects.
      </p>
      <p>
        The ease of changing from project to project and customer to customer as a consultant is definitely one of the
        perks. You get to see many different ways of working and there’s almost always some new technology to dig into.
        Every project makes you learn and that keeps things interesting! Obviously swapping a project doesn’t always
        happen right when you feel like it but at least you won’t need to change jobs in order to do so!
      </p>
      <BlockQuote>
        “Good team spirit is key in our every day, and it needs nurturing! People who have fun together work and
        communicate better.”
      </BlockQuote>
      <p>
        There’s much more to the job of a consultant at Wunderdog than coding. In the eyes of the customer, we’re the
        outsider with fresh ideas on how to improve the working environment and ways of working. Consultants have
        usually seen many environments and noted what works and what usually doesn’t. It’s our duty to ask questions and
        suggest improvements that really make the work of the customer easier. Sometimes even impacting their wellbeing
        at work. When the general vibe is good, it makes working much more enjoyable!
      </p>
      <p>
        For me, the most important things about work are projects that you’re happy to work on and colleagues who you’re
        happy to work with. All projects can’t be superb from the get go but you often have a big impact on how the
        project finally turns out. Good team spirit is key in our every day, and it needs nurturing! People who have fun
        together work and communicate better. Great team, an amazing office and a great attitude towards the employees
        are things that make me stay and feel good here. The doggos are very well taken care of and respected
        professionally!
      </p>
      <p>
        It’s nice that our people also like to hang out with each other outside of work. And that Wunderdog supports
        this in many ways. What I personally enjoy most are the soundproofed band room at the office and the clubs for
        card games and board games that you can join. Also, I like our Open Source system that compensates you for
        OSS-projects done in spare time! In my opinion, a good metric for enjoying being at work is to ask yourself:
        would you go for a beer with anyone at work? I would.
      </p>
      <p>Wunderdog is hands down the nicest place I’ve worked at!</p>
    </Chapter>
  </Fragment>
)
