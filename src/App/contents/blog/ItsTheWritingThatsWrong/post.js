import Chapter from 'App/components/Chapter'
import Image from 'App/components/Image'
import TransitionLink from 'App/components/TransitionLink'
import React, { Fragment } from 'react'


export default () => (
  <Fragment>
    <Chapter>
      <p>
        We all encounter a range of everyday problems in our lives, both large and small. At Wunderdog we’re no
        different, but we do have the advantage of being excellent problem solvers with some pretty advanced technical
        skills — helping us to find innovative answers to some of life’s tricky problems.
      </p>
    </Chapter>
    <Chapter>
      <h2>A traditional-list problem</h2>
      <p>Let me share with you the grocery shopping routine of a family dad.</p>
      <p>
        Our family consists of two kids, two active parents, and a cat. We get through loads of food and other stuff on
        a weekly basis, and the groceries are my responsibility. So, I dutifully traipse around the house every week and
        write down what we’re out of. Kitchen cupboard: oats, salt, and honey. Fridge: milk, yogurt, and cheese.
        Bathroom cupboard: toothpaste and toilet paper. And on it goes. Running around, writing down every item one by
        one, with sweat dripping off my forehead.
      </p>
      <p>Could this somehow be made easier?</p>
      <h2>A paperless solution</h2>
      <p>
        I decided to dig into the process and soon found one notable point to be improved. The way in which I was
        compiling the list was pretty old school — a paper and pen — and this slowed the whole process down. Also, more
        than once I got a call to say that something was missing from the list when I was already sitting in the car.
        Adding items to a list while driving is impossible! The traditional handwritten list was the weak link in my
        process.
      </p>
      <p>
        So, I decided to write few lines of code to solve this problem for good (check it out{' '}
        <TransitionLink to='https://github.com/vkomulai/juhani.mobi'>here</TransitionLink>). I crafted a simple,
        voice-activated to-do list using Web Speech API. The list recognizes words and can also categorize them. For
        example, if I say “tomato, lettuce, cucumber,” the app will recognize them as separate items and add each one on
        its own row. Amounts and units are also recognized: “five kilos of potatoes” will form one row listing “5kg
        potatoes”. The system recognizes that “five” is only the amount so it listens further, “kg” is the unit, and
        finally “potatoes” is the product.
      </p>
      <p>
        The app has been optimized with shopping in mind. You can drag and drop to reorganize the list, and check items
        off as you pick them up. Checking items off makes them drop to the bottom of the list, making it clearer what
        you still need to find.
      </p>
      <p>
        It’s a progressive web app, and I have an icon on my phone that opens it in the browser. The only limitation is
        that it works on Android phones, because the browser provided webkitSpeechRecognition is an experimental API and
        works only on Android Phones.
      </p>
      <p>
        I ended up naming the app Juhani, because that happens to be the name of my kind-of brother-in-law who is very
        helpful. Thanks Juhani, again.
      </p>
      <h2>Problem solved</h2>
      <p>
        Now that I’ve solved my initial problem, I’ve begun to think of development ideas. I’d love to make shopping
        more fun and game-like. For instance, the number of items collected or how fast you collect them could generate
        points. Then I could race against myself each week and try to break my record! Animations would definitely be
        needed.
      </p>
      <p>
        I’ve also considered improvements to the usability, such as the app automatically organizing the list according
        to where products are located in my nearest supermarket. Another improvement could be to make checking off items
        voice activated as well.
      </p>
      <p>
        I tell myself that I’ll work on the improvements as soon as I have time. Which, as a father of two, I have loads
        of as you might guess! But right now I’m happy with this version as it already saves me a lot of time and
        effort.
      </p>
    </Chapter>
  </Fragment>
)
