import React, { Fragment } from 'react'

import BlockQuote from '../../../components/BlockQuote'
import Chapter from '../../../components/Chapter'
import Image from '../../../components/Image'
import Video from '../../../components/Video'
import photo1 from './typescript-photo1.jpg'

export default () => (
  <Fragment>
    <Chapter>
      <p>
        Have you ever live coded in front of an audience while doing a
        presentation? It tends to be a slightly awkward deal, with alt-tabbing,
        font size configuration, typos and at least one "demo effect". Performing
        for people is difficult enough without fiddling about with your tools
        and UI.
      </p>
      <p>
        Having a slide show is handy to show some bullet points to your audience,
        but it would be nice to have them always visible. Some audience members
        will need more time than others to process the slide, and it must be a
        bit annoying if the presenter has already switched to the code before
        you get the gist.
      </p>
      <h2>Initial idea</h2>
      <p>
        I was thinking about these issues when I was planning our TypeScript
        trainings with my colleague Ville "tunkki" Heikkinen. TypeScript has
        some wonderful tooling with Visual Studio Code that we wanted to
        demonstrate. Showing compilation errors and Intellisense in real-time in
        the editor would be valuable when trying to answer the question "Why
        TypeScript?".
      </p>
      <p>
        At first, I just wanted to eliminate alt-tabbing between the code and
        slides. It would be handy to have them both in the same tool. This lead
        me to investigate how to write a plugin for VS Code. The plugin would
        split the editor in two, showing the slides on top and the code at the
        bottom:
      </p>
      <Image src={photo1} alt='TypeScript' />
      <p>
        After a bit of research, the plugin approach didn't seem viable
        considering the time constraints. The VS Code plugin API did seem
        powerful, but complex. I wasn't sure how I'd create the slides, and link
        them together with the code. Having to manually keep slides and the code
        in sync would just create a new "alt-tab" problem. Trying to automate the
        process would most likely be possible, but finding the right APIs to use
        seemed difficult.
      </p>
      <p>
        Having the VS Code IDE features was essential, but using the editor itself
        as a presentation tool didn't seem like the right way to go. But how
        would we demonstrate the tooling without VS Code? The cool thing about
        the JavaScript ecosystem is that there is a ton of open source libraries
        available that you can mash together with relative ease to create
        something new.
      </p>
      <BlockQuote>
        I believe being in the consultant’s role, even for a short period
        improves one’s professionalism.
      </BlockQuote>
      <h2>Toward the solution</h2>
      <p>
        The editor of VS Code is a separate component called Monaco. Monaco can
        be run in the browser and contains the TypeScript language service as
        well. The language service checks the code for syntax and type errors
        and shows the errors in the editor. It also powers the Intellisense in
        Monaco.
      </p>
      <p>
        With npm install monaco react it proved possible to create a slideshow
        that also displays a code editor. The code can be modified and we could
        show all the neat stuff that TypeScript tooling offers. I wanted a way
        to easily edit the slides and ended up writing the slides in Markdown.
        The presentation program would use  Electron so that it could read our
        Markdown slides from the filesystem without having to write a web server
        for it.
      </p>
      <p>
        With Flexbox, creating a basic slideshow wasn't difficult. Navigating
        between slides is done with CSS transforms. Unfortunately, Monaco needed
        some workarounds. The multiple editors in the presentation conflicted
        with each other since they contained variables with the same names. The
        non-visible editors needed to be removed to fix the issue.
      </p>
      <p>
        The finished presentation software looked nice and fulfilled my
        requirements. As a programmer, writing slides in Markdown was a much nicer
        way to make a presentation than with PowerPoint. You can just throw the
        slide markup into git, no worrying about emailing the presentation, or
        versioning as typescript_basics_final_v3_really_final.pptx.
      </p>
      <h2>Going the extra mile</h2>
      <p>
        I did start thinking about the errors though. The editor displayed a
        nice red squiggly line under the error location, but required the user
        to hover over it to show the error message:
      </p>
      <Video src= "https://player.vimeo.com/external/380717734.sd.mp4?s=e2b6ff161997042dcb57a80fe87393b43959e21c&profile_id=164" />
      <BlockQuote>
        At Wunderdog, it’s also the incredible colleagues who make the days
        meaningful.
      </BlockQuote>
      <p>
        This seemed like the kind of thing to cause some minor issues during the
        presentation: "Hey, could you show the error on line 2 really quick? And
        now the one on line 4?". Not a big problem, but the error messages
        should really be visible all the time.
      </p>
      <p>
        Monaco supports line "decorations", allowing you to add CSS classes for
        specific lines. With decorations and the TypeScript compiler, it was
        possible to show compilation errors after the line the error comes from:
      </p>
      <Video src= "https://player.vimeo.com/external/380717778.sd.mp4?s=f8c58d6714f49262e777231f234f934bbb99f0c8&profile_id=165" />
      <p>
        Now the audience could see the compilation errors without me or tunkki
        having to point at things!
      </p>
      <h2>Having fun with it</h2>
      <p>
        With all these nice little features the presentation seemed complete and
        we could get on with planning with the contents of the presentation. But
        then we discussed about how to explain the difference between
        compile-time and runtime to the audience. In a language like Java, the
        difference between runtime and compile-time is not quite as stark as it
        is with TypeScript. TypeScript interfaces, unlike for example Java classes,
        are purely a compile-time construct. They're a linter on steroids using
        a special syntax. You can't see any trace of them in the generated
        JavaScript. We wanted to showcase this by showing the compiled output.
        Fortunately, this was not difficult, as the TypeScript compiler provided
        a simple transpileModule  function that transformed a TypeScript string
        into JavaScript. The  presentation editor now had a tab that showed the
        compiled JavaScript:
      </p>
      <Video src= "https://player.vimeo.com/external/380717817.sd.mp4?s=fa006b82e824ae828d89c9447298a2116c3bd7b0&profile_id=165" />
      <p>
        Another aspect of the compile/runtime separation is the (type) unsafety
        of some TypeScript constructs. For example, the any type allows you to
        turn off the type checker and do any horrible thing you could do with
        JavaScript:
      </p>
      <Video src= "https://player.vimeo.com/external/380717845.sd.mp4?s=6a972f03f74944e78344b5cd22029168c7aa1013&profile_id=165" />
      <p>
        Having the values of variables and other expressions visible would be
        valuable when trying to demonstrate how execution differs from
        compilation. Eventually, I figured out a hacky way to execute specific
        parts of the code, and show the results inline, as with errors:
      </p>
      <Video src= "https://player.vimeo.com/external/380717872.sd.mp4?s=0741675f3cf4e34448db9da0202c43d1203d8dce&profile_id=165" />
      <p>
        With all of these features implemented, it felt easy to edit the slides
        and to use it during a presentation. We could confidently display the
        advantages of TypeScript and also show the language's peculiarities. It
        was nice to see that making something fit for a very specific purpose
        can be a real asset, and not as difficult as one might think. Of course,
        none of this would have been possible without the Open Source TypeScript
        ecosystem and the great engineering Microsoft has done with TypeScript.
      </p>
      <p>
        We will definitely be using this tool in our future TypeScript sessions.
        We're already planning the next one!
      </p>
    </Chapter>
  </Fragment>
)
