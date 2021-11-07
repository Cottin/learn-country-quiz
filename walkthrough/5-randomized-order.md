# 5 - Randomized order
It's time to make the prototype a bit more real. Until now the questions being generated have been hard coded in the games. Your team is tasked with generating randomized questions when a new game starts. **Tip:** `src/countries.js` contains an object literal with all possible country codes.

It's also time to make the application GDPR-complient.

## Randomized questions
The suggestions is that two members of your team starts looking at how to generate randomized questions while the 3rd member starts looking at the GDPR task below.

- Make sure to hide this new feature behind a new feature flag like you did in the previous task
- The `createGame` function is located in `src/utils.js` so make sure to continue from there. To be clear, that function creates the data for the game, ie. all questions etc. It doesn't actually kick of the game, that is done in `App.js`.
- You must create at least one unit test using mocha that tests for instance that the generated questions don't ask about the same flag and at least one unit test testing that the generated alternatives for a question are different countries.
- Generate 5 questions for each game
- You must create a new workflow in your deploy pipeline that runs the tests and adds a badge to your readme saying if tests passed or failed.
- You also need to update your existing deploy workflow to run the tests and if tests fail, deployment should not continue.


## GDPR-Compliance
We are soon going to add Google Analytics to the site. Make sure to add appropriate cookie banners in preparation for that event.

Go through the GDPR slides and recording from Friday 5 Nov. The main points are:

 - Get users’ consent ***before*** using any cookies (except strictly necessary cookies)
 - Explain each cookie in plain language before consent (could have a link to your explanations)
 - Maintain a sub processor list

Don't forget to [put a green checkmark](README.md) before you continue to the next task!

[Continue!](6-google-analytics.md)
