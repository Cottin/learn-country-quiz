# 1 - Pipleline
You're team is tasked with setting up build pipeline for the project using github as a first basic step to get started with CI and CD.


## Setup
To start with, one person from your team needs to fork this repo and add the other team members as collaborators.


## Setup Firebase
One group member creates a Firebase project and sets up a Real time database in the UI. Then replace the firebase configuration in `App.js` with your own. Make sure to go to Firebase settings > Users and permissions > and add all team members as members so everyone can you the real time database UI.

Secondly, Setup Firebase hosting from the firebase console and go through the steps in the wizard. When running `firebase init` do so from the `app` folder. In the questions asked by the `firebase init` script in your terminal, select that you want "Firebase Realtime Database" and "Hosting" (Note that they might not be worded exacly like that depending on you version of `firebase-tools` you have installed). Later use the option "Use existing project" and choose the project you've just created in Firebase.

    // Answer questions like so:
    ? What file should be used for Realtime Database Security Rules? database.rules.json
    ? What do you want to use as your public directory? dist
    ? Configure as a single-page app (rewrite all urls to /index.html)? Yes
    ? Set up automatic builds and deploys with GitHub? No
 

## Run locally
After every team member has cloned your teams fork to their local machine, have a look at the `package.json` and make sure everyone figures out and are able to run the app for development now when it is connected to your own real time database in Firebase.

## Deploy
Deploy your app using firebase hosting from the terminal and make sure you have a url to your site that works. Before you run `firebase deploy` you need to run the production build script in `package.json`. Post this url in the "The url to our site is:" section in [the instructions page](0-instructions.md).

## Pipeline
In order to really try out trunk based development we're only going to work with one branch in this project, `main`. Set up a pipeline in github actions that runs the production build and deploys the result to Firebase hosting (note: the pipeline should automatically deploy to firebase hosting, you should not do it manually from your terminal). This app will only be a front end, no backend code will be needed. We will use the real time database in Firebase for data needs.

Don't forget to [put a green checkmark](README.md) before you continue to the next task!

[Continue!](2-basic-feature-flagging.md)
