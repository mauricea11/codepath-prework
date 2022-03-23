# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Maurice August**

Time spent: **6** hours spent in total

Link to project: https://glitch.com/edit/#!/thinkable-sage-existence

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] An alert telling the user how many tries they have left
- [X] An easy mode and hard mode setting
- [X] A record of the number of wins the user has

## Video Walkthrough (GIF)

![](https://user-images.githubusercontent.com/85422454/159657733-261eee11-ebd8-43ef-bf09-a87ffc8ae423.gif)
![](https://user-images.githubusercontent.com/85422454/159141421-3cd59169-c024-44ba-aa8d-dcf6bdad2b32.gif)
![](https://user-images.githubusercontent.com/85422454/159141439-033b48e4-8ccf-4261-a34f-2d0464134682.gif)
![](https://user-images.githubusercontent.com/85422454/159141444-5eafad38-c24a-4b6f-ae0f-6fdd4a6d6147.gif)
![](https://user-images.githubusercontent.com/85422454/159141449-1dfd0ba0-6c73-458d-a8e3-be05430c8212.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- Color palette website: https://coolors.co/330036-38182f-2f394d-56666b-eee1b3
- A possible way to fill the random array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
  
  Something that was tricky for me while completing this project was the debugging differences between back-end vs front-end languages, particularly when it comes to JavaScript. Most of my experience lies with Java, and if I were to run into an error with my code I am used to either printing out the logic with System.out.println(), testing breakpoints, or using the rest of the debugging tools provided by IDEs like Intellij or Eclipse. However, with front-end development, specifically with CSS and Javascript, I have not yet learned of a debugging tool that works similarly to Java or Python IDEs. Most of my attempts at debugging were just trial and error replacing old code with new code and hoping that it looks or sounds good on the preview screen. Moreover, JavaScript offers the best of both worlds in being able to communicate with markup languages using the DOM and offers back-end structures like loops and decision branches; still, to debug my code the quickest solution that I know of is to use console.log() and inspect the screen. There are much more steps involved and using the developer view is not always reliable for me. The Safari inspect element function and console in the developer screen were completely gone for me during the project, and when it finally worked in Chrome, the JavaScript variables and functions would not appear if I did not inspect the preview screen in Glitch.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

One thing that I am curious about after working on this project is how to debug front-end code since the output is mostly visual. As mentioned in the things I found challenging about this project, I am more used to the debugging process of back-end IDEs, where common methods involve print statements or using breakpoints for the debugger tool. With front-end code, the process is different. When I first learned web development using HTML and CSS, much of the styling and element alignment was done with trial and error. I wanted to know if there was a more efficient way of doing this. Other similar questions are: are there debugging packages that can be installed in a text editor like Atom or Glitch? Is there a traditional IDE like Eclipse for front-end work?

I was also curious about the languages/frameworks used in vibrant, mostly software service websites. Websites like codepen.io, algoexpert.io, and CSS-tricks.com showcase bold, vibrant elements that can be interacted with by the user. I know that there are popular frameworks used to make web development easier but do all of the frameworks have the code needed to create this or is it really up to the programmer on how to combine all of them? 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had more time, I would begin working on a score counter so that every time the user wins, the wins accumulate, and a "best score" history is generated. This would most likely involve creating a score counter variable to keep track of the user reaching the end of the sequence and winning, a local storage or an array that keeps track of the history of scores, and a function that is called at the end of the game to compare the current win to the history of scores and checks if a new record has been reached. 

In continuation of the first one, another feature I would add is the ability to get scores of other users and compare them to your own. I would imagine this being more work to build, but a possible strategy could involve making the website public, storing the wins from other users in a database using a language like SQL, uploading the user's wins to the database, and either checking to see who has the highest score relative to that user's win rank(1-10, 11-20, etc.), or at the end of the day pausing the collection of new scores in the database to go back and check the previous ones for the user with the most wins. 

## Interview Recording URL Link

[My 5-minute Interview Recording] https://www.loom.com/share/54f32050535949ae9ae797c17e887388


## License

    Copyright Maurice August

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
