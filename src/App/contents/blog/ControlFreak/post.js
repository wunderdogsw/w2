import Chapter from 'App/components/Chapter'
import Image from 'App/components/Image'
import TransitionLink from 'App/components/TransitionLink'
import React, { Fragment } from 'react'
import hero from './i-had-a-problem.jpeg'

export default () => (
  <Fragment>
    <Image thumbSrc={hero} src={hero} alt='Oodi' />
    <Chapter>
      <p>
        We all encounter a range of everyday problems in our lives, both large and small. At Wunderdog we’re no
        different, but we do have the advantage of being excellent problem solvers with some pretty advanced technical
        skills — helping us to find innovative answers to some of life’s tricky problems.
      </p>
    </Chapter>
    <Chapter>
      <h2>A non-extendable problem</h2>
      <p>
        I had previously crafted a solution to control my power outlets and read climate sensor data with any device on
        my home network.
      </p>
      <p>
        The solution worked fine and was super easy to use. So what was my problem? Basically, a new toy. I was given a
        Ruuvitag Bluetooth beacon to play with, so my inner engineer started thinking of all the possible ways I could
        use it. Soon I became obsessed with the idea of attaching it to the power outlet control system I had at home. I
        realized quite uickly that my previous solution wasn’t easily extendable so I decided to redesign and
        reimplement my home automation application from the ground up.
      </p>
    </Chapter>
    <Chapter>
      <h2>A modular solution</h2>
      <p>
        Everything came together quite quickly. I had already identified three different technical areas within my home
        automation: a user interface to view and control everything, the power outlets, and sensors controlled via
        TellStick protocol, and the Ruuvitag sensors controlled via Bluetooth. I decided to build each of them as a
        separate system so that they would be easily extendable later on.
      </p>
      <p>
        To keep things simple, I decided to implement the UI as a simple JavaScript application and the other systems as
        REST APIs that communicate over HTTP. In this way, if I want to attach a new kind of device to the UI it can be
        implemented as a separate service and just needs to show itself via HTTP.
      </p>
    </Chapter>
    <Chapter>
      <h2>Problem solved</h2>
      <p>
        By the time I was done I had reimplemented the home automation system with the ability to read the Ruuvitag
        beacon’s sensors.
      </p>
      <p>
        The final test would be to verify whether the system was really as easily extendable as I first imagined, but I
        guess that’s another story!
      </p>
      <p>
        You can find my code <TransitionLink to='https://github.com/kotio-home-automation'>on Github</TransitionLink>{' '}
        and the project documentation{' '}
        <TransitionLink to='http://blog.polarcoder.net/2017/08/diy-home-automation-new-generation.html'>
          here
        </TransitionLink>{' '}
        .
      </p>
    </Chapter>
  </Fragment>
)
