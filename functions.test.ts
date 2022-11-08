const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
//     // CODE HERE
const arr = ['s','a','m','e']
    test('test shuffle functions returns an array', () => {
        expect(shuffleArray(arr)).toBeTruthy()
    })
    test('check if array contains a specific element', () =>{
        expect(shuffleArray(arr)).toContain('m')
    })
    test('check that it returns an array of the same length as the argument sent in', () =>{
        expect(shuffleArray(arr)).toHaveLength(arr.length)
    })
})

