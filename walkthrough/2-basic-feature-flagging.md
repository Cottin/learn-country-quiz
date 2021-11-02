# 2 - Basic Feature Flagging
In order for trunk based development to work we need a way to do dark launches and the most common way to achieve that is through the use of feature flags. Initech realized feature flagging can be done in many different ways so management in now asking all teams to come up with a simple implementation of feature flags using the `localStorage` feature in the browsers.

**Tip!**

	// Feature flags in it's simplest form can be just a variable
	const ffImprovedScoring = true / false

	if (ffImprovedScoring) {
		// render Improved Scoring
	}
	else {
		// render old scoring feature
	}

	// Taking one step further, feature flags can be bundled in an object
	const featureFlags = {improvedScoring: true / false, randomizedOrder: true / false}


The goal of this task is that your team in upcoming tasks should be able to commit code directly to the main branch when developing new features but without exposing those features directly to the end user. By flipping different feature flags on or off in `localStorage` you will be able to expose or hide the new features you're building. In this way, visitors such as testers or people from our client will be able to test the stable version of the app while you develop and test new features in the same environment!

