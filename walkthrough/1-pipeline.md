# 1 - Pipleline
You're team is tasked with setting up build pipeline for the project using github as a first basic step to get started with CI and CD.


## Setup
To start with, one person from your team needs to fork this repo and add the other team members as collaborators.


## Setup Firebase
One group member creates a Firebase project and sets up a Real time database in the UI. Then replace the firebase configuration in `App.js` with your own.

## Run locally
After every team member has cloned your teams fork to their local machine, have a look at the `package.json` and make sure everyone figures out and are able to run the app for development now when it is connected to your own real time database in Firebase.

## Deploy
Deploy your app using firebase hosting from the terminal and make sure you have a url to your site that works. Post this url in the "The url to our site is:" section in [the instructions page](0-instructions.md).

## Pipeline
In order to really try out trunk based development we're only going to work with one branch in this project, `main`. Set up a pipeline in github actions that runs the production build and deploys the result to Firebase hosting (note: the pipeline should automatically deploy to firebase hosting, you should not do it manually from your terminal). This app will only be a front end, no backend code will be needed. We will use the real time database in Firebase for data needs.

Don't forget to [put a green checkmark](0-instructions.md) before you continue to the next task!

[Continue!](2-basic-feature-flagging.md)
