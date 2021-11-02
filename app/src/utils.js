
const hardCodedQuestions = {
	1: {
		alternatives: {
			1: 'swe',
			2: 'fra',
			3: 'dnk',
			4: 'bra',
		},
		correct: 'swe',
	},
	2: {
		alternatives: {
			1: 'blz',
			2: 'fra',
			3: 'cub',
			4: 'cog',
		},
		correct: 'fra',
	}
}

export const createGame = () => {
	const generatedQuestions = hardCodedQuestions
	return {
		currentQuestion: 1,
		questions: generatedQuestions,
		score: {player1: 0, player2: 0},
		status: 'starting',
	}
}


export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
