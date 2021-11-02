# 1 - Pipleline
You're team is tasked with setting up build pipeline for the project using github as a first basic step to get started with CI and CD.


## Setup
To start with, one person from your team needs to fork this repo and add the other team members as collaborators.

After every team member has cloned your teams fork to their local machine, have a look at the `package.json` and make sure everyone figures out and are able to run the app for development.

## Pipeline
In order to really try out trunk based development we're only going to work with one branch in this project, `main`. Set up a pipeline in github actions that runs the production build and deploys the result to either Heroku, Firebase hosting or any other similar cloud provider (see previous lessons and labs). This app will only be a front end, no backend code will be needed. We will use the real time database in Firebase for data needs.

Don't forget to [put a green checkmark](walkthrough/0-instructions.md) before you continue to the next task!

