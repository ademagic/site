---
title: '5 Steps To Writing A Good Technical Test'
metaTitle: 'How to write a good tech test – My experiences of what does and doesnt work'
date: '2020-05-23'
summary: 'My experiences with completing (and assessing) technical tests'
metaDesc: 'Technical ability assessments can be daunting for both parties. There are good and bad ways to write technical tests – In this post, I outline my experience with writing and completing tech tests.'
tags:
  - management
  - job-search
---
Technical tests are take-home (or in-person) excercises that allow developers to demonstrate their ability and approach. As an interviewee, proving you have the skills for the job can be nerve-racking (I've totally bottomed-out on more than one). As an interviewer it can be hard to ask the right questions, and to get the answer you're looking for.

In the last few weeks of my job hunt, I spent more time completing technical tests than working through my training plan. With that behind me, and with the time I spent assessing technical applicants over the years, I've collated a few tips on how to put together a fair and optimal take-home test for you and your candidates.

## 5 steps to writing a good take-home technical test

### 1. Write your criteria
Create a marking criteria that outlines what you'll be looking for when reviewing the test, complete with weighting/priority. Are you trying to understand their approach to structuring classes? How important is test coverage? How about a bug or feature backlog? Do you want to see design skills? All of these things are valid. It's important that you're thorough and that you write all of this out for yourself.

![Funny test answer, find x of a right angled triangle, circled here it is](/images/tech-tests/find-x.jpg "The clearer you are, the better the answers you'll get. Sourced from funnytab.net")

### 2. Be realistic about your timing
Things start to get tricky now. Go back over your criteria and figure out how much time you expect people to spend doing this. Typically, the suggested time for a take-home test is 2-3 hours. Any longer, and candidates may not bother with taking the test. However, I have spent >12 hours on a 3 hour test for a job I really wanted (and got), and I'm sure I'm not the only one.

Anything you can provide to help set them up, like substantial dummy data or designs, will go a long way. Breaking up the test into two phases can be helpful too, though that could mean a whole extra step in your interview process.

Keep in mind that your candidates may be taking multiple tests while still tending to work and other responsibilities. Candidates who want to work for you will try to prioritise your test, but understand that you're starting to optimise for the person with the most time instead of the right person. 

### 3. Do the test yourself
If you can, complete it yourself according to the timing guidelines, and then rigorously assess using your own criteria. Validate whether you'll get what you're looking for in the time you set aside for it. [MoSCoW](https://en.wikipedia.org/wiki/MoSCoW_method) your criteria, consider revising it, and if necessary, do the test again.

Maybe get some of your colleagues to do it too. Keep in mind that you're *testing the test*, it's not a reflection on your or your colleague's abilities. What you're looking for is a test that can be completed, and one that you and your team can confidently (and consistently) review.

<figure>
<img alt="scene from kung fury, hackerman codes away gibberish on retro computer" src="https://media.giphy.com/media/l46C6sdSa5DVSJnLG/giphy.gif"/>
<figcaption>
  Well, interviewer, I'm glad you asked – I'd say my biggest weakness is not being able to pick the right images for blogposts.
</figcaption>
</figure>

### 4. Share the criteria with the candidate
I can't stress this enough. Tell them what you're looking for so they know what to prioritise. If you're asking a full stack developer to write a complex microservice architecture in node that feeds data to a simple app, and then you reject them based on their lack of responsive UI (that you didn't ask for), nobody's gonna have a good time.

This is also the time to share any code styles or preferences that you're looking for. It's a good way to test somebody's adaptability. Just remember – not following the code structure you'd use doesn't necessarily make the candidate a bad fit.

### 5. Always give feedback
Be fair, and be prompt. Let them know (as soon as you can) exactly why they didn't meet your standards, where they fell short and where/how they can improve. The criteria you wrote in step 1 should make this real easy for you. For bonus points, tell them what you liked and what they did well.

Remember, your candidate has put a great deal of time and effort into this process, sometimes prioritising it over other things that are valuable or important to them. Reciprocate with empathy, tact and effort.

## My favourite test I've written
The best test I ever wrote was actually not a take-home test. It was an in-person pair programming challenge which could be done remotely as well.

I wanted to test for a candidate's ability to adapt to a styleguide or design system, and their approach to consuming and extending existing tooling and components. I wanted to know how the candidate would work with others, usually with engineers they'd never met. I was also looking for knowledge of semantics, accessibility, BEM, OOCSS and Atomic Design.

I created a codepen where I included our whole UI library, and created some UI that adhered to our styleguide. The challenge was to add a new component which would match a design I provided. I acted as an in-person stack overflow, but the candidate was welcome to google whatever they wanted (I even helped, and sometimes had to do it myself).

I could get to my outcome within about 45 minutes. While there were some failed attempts, there were many good ones, and it was obvious when someone was stellar. The successful candidate and I discussed the significance of nesting in our styleguides, she followed (and explained) the [open-closed principle](https://csswizardry.com/2012/06/the-open-closed-principle-applied-to-css/), and I helped her navigate our documentation so she could focus on coding. She didn't complete the test, but that wasn't important.

## Conclusion

Technical tests suck, but a good testing experience can do so much to grow both your candidate and your team. It's also an opportunity for you to set up a good relationship with the industry, and start a smooth onboarding with your future teammate. As much as you're assessing the candidate, they're also assessing you. Any thought or effort you put into your testing process will be returned tenfold.

I'd love to know what experience you've had with technical tests, or examples of great testing experiences – leave a comment below!

✌️