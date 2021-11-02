import assert from 'assert'
import tests from './odd.js'

// Because of the special array structure being exported from the problems, we add this extract the function.
// fn below is the function to test
const [testDefs] = tests
const [fn] = testDefs

describe("odd", () => {
  it("[1, 2, 3, 4, 5]", () => assert.strictEqual(fn([1, 2, 3, 4, 5]), [1, 3, 5]))
})

