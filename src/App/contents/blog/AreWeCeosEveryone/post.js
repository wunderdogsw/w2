import React, { Fragment } from 'react'

import BlockQuote from '../../../components/BlockQuote'
import Chapter from '../../../components/Chapter'

export default () => (
  <Fragment>
    <Chapter>
      <p>
        You might have heard stories about accidents where a child is stuck under a burning car and, as if she had
        super-human strength, the mother manages to move the car so that the child is freed. Is there any way these
        kinds of stories could be true?
      </p>
      <p>
        Perhaps there is. According to a theory¹ ², there is a mechanism in muscle that protects it from too high an
        amount of force to prevent tendons and tissue from breaking down. Every muscle contains the so-called Golgi
        tendon organ which, when the muscle contracts, starts to send signals to the spinal cord to limit the generation
        of force. The muscle then decreases the amount of force reflexively and nothing breaks. In an emergency,
        however, the brain raises the threshold of triggering the reflex and superhuman-sounding efforts could thus be
        possible.
      </p>
      <p>
        The mental world seems to operate in the opposite way. Whereas physical abilities improve under pressure because
        of e.g. adrenaline; mental abilities, in turn, deteriorate.
      </p>
      <BlockQuote>
        It is well-known that some cognitive abilities, such as creativity, suffer when you are stressed or under
        pressure.³
      </BlockQuote>
      <p>
        The mental Golgi tendon organ — analogous to the amygdala? — keeps the threshold of shutting down creativity
        very low if it senses that your mental capacity must be used for survival.
      </p>
      <p>
        For example, if you have to work under strict supervision, a significant part of your energy and brainpower is
        spent to reason not only how you could work effectively but also how to make your working look effective. It is
        easier to make low-risk, rational-looking solutions that, if/when they fail, can be put under the seemingly
        innocent at-least-I-tried category. Even if you had foreseen the failure.
      </p>
      <p>
        Let’s think for a moment about the highest operative manager, CEO. In daily work this employee does not report
        directly to anyone — but responsibility burdens even more. In the end, the future of the whole company is on the
        CEO’s shoulders. As a CEO, you can’t afford spending energy to seek good-looking but mediocre solutions. You
        must unleash all your creativity to find solutions in various situations — the board of the company is not going
        to hold your hand. However, this is also your trump card: real responsibility pushes you to search for real
        solutions.
      </p>
      <BlockQuote>In fact, I have heard a software developer say: write code as if you were a CEO.</BlockQuote>
      <p>
        In my opinion, this piece of advice is quite insightful — it helps you think clearly about what is best for your
        business and you are able to more clearly evaluate what kind of decisions you should make and when. You also
        strive to actively acquire knowledge and ask why questions — it starts to feel an obvious prerequisite for
        making decisions.
      </p>
      <p>
        As a CEO, you must face responsibility, you cannot run away from it. If you avoid fixing unpleasant problems,
        you will end up in a loop where the problems keep growing. Moreover, I believe that taking responsibility and
        accepting it actually liberates you. Based on my personal experience, the fear often stems from the possibility
        that you might need to take responsibility, not from the object of responsibility itself.
      </p>
      <BlockQuote>
        If you choose to take responsibility, fear tends to disappear and the ability to be creative and think clearly
        comes back
      </BlockQuote>
      <p>
        This is why we should encourage each other to take responsibility. If ou are able to raise the threshold of the
        mental Golgi tendon organ of your colleagues or subordinates, they might be able to perform better than you
        would expect. Besides, make some room for failures — it may paradoxically reduce them!
      </p>
    </Chapter>
    <Chapter>
      <p>
        <small>
          [1] Burke, D. (1983). The afferent volleys responsible for spinal proprioceptive reflexes in man. The Journel
          of Physiology, 339(June), 535–52.
          <br />
          [2] It should be pointed out that this phenomenon has not been researched very thoroughly and seems still to
          be open to debate. <br />
          [3] Talbot, R. , Cooper, C. and Barrow, S. (1992), Creativity and Stress. Creativity and Innovation
          Management, 1: 183–193. doi:10.1111/j.1467–8691.1992.tb00052.x
        </small>
      </p>
    </Chapter>
  </Fragment>
)
