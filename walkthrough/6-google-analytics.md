# 6 - Google Analytics
Our client have requested us to setup some basic monitoring for the app using Google Analytics which they are used to using from previous projects.

Since you're using Firebase you can choose to either setup analytics in Google Analytics the "classical" way or to use analytics in Firebase.

## DebugView
Make sure to setup the DebugView to test that your analytics is working. [Firebase debug view](https://firebase.google.com/docs/analytics/debugview) or [Google Analytics DebugView](https://www.youtube.com/watch?v=dNsCUnUOlgE)

## Create some events
In Google (and Firebase) Analytics we can track custom events such as "started-game" or "cancelled-game" to better understand what our users are doing in our apps. You're tasksed with creating a couple of events that your team deems reasonale for this app. Make sure they work with the DebugView and after testing, check back the next day in Analytics to see if the events are registered correctly.

- [GA events](https://developers.google.com/analytics/devguides/collection/analyticsjs/events)
- [Firebase Analytics](https://firebase.google.com/products/analytics?gclid=Cj0KCQjww4OMBhCUARIsAILndv5ziHwaqiinaMPJQWimxcmNXIfijVGTtJlP9KOfjohSw7RTKKdunfQaAs4HEALw_wcB&gclsrc=aw.ds)
- [Firebase events](https://firebase.google.com/docs/analytics/events?platform=web)
- [Youtube GA track events](https://www.youtube.com/watch?v=Ly-IHQhX4DU)

***Note**: Google Analytics is a bit messy. There is: Old versions of Analytics, GA 4 and Google Tag Manager. In this project, you should implement Google Analytics 4 (GA 4), don't worry about the other. Keep in mind that if you find tutorials online, they might describe how to setup on older version of GA so make sure they are talking about GA 4*


Don't forget to [put a green checkmark](README.md) before you continue to the next task!

[Continue!](7-advanced-feature-flags.md)
