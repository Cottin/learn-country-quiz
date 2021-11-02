# 3 - Small improvements
Our client tested the prototype the other day and have 3 suggestions for improvements.

**First**, the score tracking isn't that smart. Since you don't get any punichment for answering wrong, you can just click whatever alternative without thinking so your opponent doesn't get a chance to think.

They want the scoring to work like this: When you're the first to answer correctly, you should get +1 point, but if you're the first to answer incorrectly, you should get -1 (minus) point. It should still only be the fastest person who gets to answer.

**Second**, they want more small flags on the start page (over the "Play"-button), and they want the flags presented there to be randomized so it's not the same all the time. **Tip:** `src/countries.js` contains an object literal with all possible country codes. Make sure to have tripple the amount of flags there is now and that they are randomized differently when refreshing the page.

**Third**, they realize that if it's a tie, it looks like both players have won. They want it to be more obvious that it's a tie on the result page if the game actually was a tie (ex. YOU 1 - 1 OPPONENT). They want you to find a good image representing a tie and change the text from "Congratulations!!" to something more appropriate for a tie.

## How to work
Initech management wants to really try out this trunk based development so here are some rules for how to work during this task:

- Team members selects one task each and try working with all tasks in parallel. Team work is of course welcomed but we want to see commits from each team member in the git log.
- Make sure not to create any feature branches during this task, you're suppose to work towards `main` the entire time.
- Also make sure that the app keeps working exactly as before for all "normal" visitors (visitors that have not set their localStorage feature flags).
- The only way a visitor should see the new feature is if they flip their feature flag on in localStorage. For example if we open Chrome Dev Tools and do `localStorage.setItem('improvedScoring', true)`.
- Make sure to commit often! If you have set up feature flags correctly you should be able to commit without disturbing "normal" visitors going to your public url as well as your team mates working with their own tasks.


## Hand-in
When you've finished the three functions, make a short screen recording showing:

- That if no feature flags are turned on, the user gets the existing game flow.
- You flipping 2 of three feature flags in the console in chrome and go through the improved game flow.
- You flipping all 3 flags to true in the console and going through the fully improved game flow.

Save this screen recording, it will be part of the hand in later.


## Set feature flags by default
When you've finished the tasks and completed the screen recording for hand in, turn all flags on by default. For instance in `index.js` or a similar place that gets executed before app start, check if the feature flags in local storage are set. If the are not set, make sure to set them and turn them on by default. This way, the new default game flow for "normal" visitors is the new improved game flow that your team build. At the same time, if we notice any bugs in the new feature, we can easiliy "roll them back" by turning one or flags off by default.







