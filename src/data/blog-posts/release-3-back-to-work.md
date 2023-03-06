---
title: 'Release 3: Back to work'
publishDate: 01 Jun 2020
description: 'A few new features but alas, not the homepage. Also, my last release for the foreseeable :)'
soundtrack: 'album/0qxsfpy2VU0i4eDR9RTaAU'
tags:
  - release
  - site
foreword: 'This post is pretty old, and references Eleventy and other tech that my site no longer uses. To find out what I built this with, check out my Credits page. Link in footer.'
---
Over the past 3 months or so I've had the luxury of spending a good chunk of time on my website. Voluntarily.

I resigned from my role at Finder right before COVID and all the fun that came with it. Since then, I've been hammering away at code pretty hard, both to learn new things and to try and dust off the developer part of my brain. I'm excited to say that starting June 1, I will start my new role as Senior Front End Developer at <a target="_blank" href="https://www.innowell.org">InnoWell</a>.

To commemorate the occasion, I added a bunch of stuff to the site. Some without much forethought. Enjoy.

### About me: A Timeline
I gave my [About](/about) page a little facelift, updated some copy, and in perhaps my cheesiest move, added a timeline of my career. The CSS was fun to build, and figuring out what to put in there was fun too. I'll likely add more animations and interactions to it in future. I also took that opportunity to learn a bit more about Eleventy's [Data Cascade](https://www.11ty.dev/docs/data-cascade/).

### Removing dependency on the Hylia fork
Not a huge change, but the code's been pushed to a [fresh repo](https://www.github.com/ademagic/site) which is no longer a fork (but a clone) of [Hylia](https://hylia.website). I updated the docs to reflect this. Mainly just makes my commit graph look prettier, but semantically makes sense because I'm completely diverging from the repo and not planning to merge back into canonical.

### Socials component reworked
I use one partial to build the social icons in the footer, and on my about page. The socials data was statically added to the partial, but after learning about the Data Cascade, I realised I had a JSON data file where this stuff was nicely stored. I reworked it to use the social data and made some other minor visual updates to it. Also, I'm not looking for work anymore, so the title's gone.

### Soundtracks!
I'm a big fan of music while I work, and while I do pretty much anything else. Since most of it's over Spotify, I thought it might be interesting to add a widget to the end of the post. I went and retrospectively added soundtracks to my other posts, too. If you like what I listen to, or think you could recommend something I'd enjoy, hit me up!

### Fancy first letter styles
Like I said, no forethought. Why not?