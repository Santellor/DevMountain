import { jest } from '@jest/globals'

const mockIsWord = jest.fn(() => true)
jest.unstable_mockModule('../src/words.js', () => {
    return {
        getWord: jest.fn(() => 'APPLE'),
        isWord: mockIsWord,
    };
});

const { buildLetter, Wordle } = await import( '../src/wordle.js')

describe('letter building', () => {
    test('letter?', () => {
        const letter = buildLetter('T', 'ABSENT'); 
        expect (letter).toEqual({letter: 'T', status: 'ABSENT'});
    });
});

describe('new Wordle', () => {
    test('wordle default', () => {
        const wordle = new Wordle()
        expect(wordle.maxGuesses).toEqual(6)
    })
    test('wordle guesses array', () => {
        const wordle = new Wordle()
        expect(wordle.guesses.length).toEqual(6)
    })
    test('wordle max guess override', () => {
        const wordle = new Wordle(10)
        expect(wordle.maxGuesses).toEqual(10)
    })
    test('wordle current guesses', () => {
        const wordle = new Wordle()
        expect(wordle.currGuess).toEqual(0)
    })
    test('wordle word mock test', () => {
        const wordle = new Wordle()
        expect(wordle.word).toEqual('APPLE')
    })
       
});

describe('guess building', () => {
    test('correct guess?', () => {
        const wordle = new Wordle
        const guess = wordle.buildGuessFromWord(`A____`); 
        expect (guess[0].status).toEqual('CORRECT');
    });
    test('present guess?', () => {
        const wordle = new Wordle
        const guess = wordle.buildGuessFromWord(`E____`); 
        expect (guess[0].status).toEqual('PRESENT');
    });
    test('absent guess?', () => {
        const wordle = new Wordle
        const guess = wordle.buildGuessFromWord(`Z____`); 
        expect (guess[0].status).toEqual('ABSENT');
    });
    test('append guess count?', () => {
        const wordle = new Wordle(1)
        wordle.appendGuess('GUESS')
        expect (() => wordle.appendGuess(`GUESS`)).toThrow();
    });
    test('append guess length?', () => {
        const wordle = new Wordle()
        expect (() => wordle.appendGuess(`Z_____`)).toThrow();
    });
    test('append guess word?', () => {
        const wordle = new Wordle()
        mockIsWord.mockReturnValueOnce(false)
        expect (() => wordle.appendGuess(`GUESS`)).toThrow();
    });
    test('append guess current guesses?', () => {
        const wordle = new Wordle()
        wordle.appendGuess('GUESS')
        expect(wordle.currGuess).toEqual(1)
    })
});

describe('isSolved?', () => { 
    test('correct?', () => {
        const wordle = new Wordle()
        wordle.appendGuess('APPLE')
        expect(wordle.isSolved()).toEqual(true) 
    })
    test('correct?', () => {
        const wordle = new Wordle()
        wordle.appendGuess('PEARS')
        expect(wordle.isSolved()).toEqual(false) 
    })
})
describe('endGame?', () => {
    test('correct?', () => {
        const wordle = new Wordle()
        wordle.appendGuess('APPLE')
        expect(wordle.shouldEndGame()).toEqual(true)
    })
    test('game over?', () => {
        const wordle = new Wordle(1)
        wordle.appendGuess('APPLE')
        expect(wordle.shouldEndGame()).toEqual(true)
    })
    test('keep trying?', () => {
        const wordle = new Wordle(5)
        expect(wordle.shouldEndGame()).toEqual(false)
    })
    test('correct?', () => {
        const wordle = new Wordle(3)
        wordle.appendGuess('GUESS')
        expect(wordle.shouldEndGame()).toEqual(false)
    })

})

 
    


    