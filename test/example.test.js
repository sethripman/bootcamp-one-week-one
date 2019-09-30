// IMPORT MODULES under test here:
// import example from '../src/example.js';

import { isCorrect } from '../functions.js';
const test = QUnit.test;

test('should return true if the user says yes', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userAnswer = 'yes';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const userAnswerIsCorrect = isCorrect(userAnswer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(userAnswerIsCorrect, true);
});

test('should return false if the user says no', function(assert) {
    const userAnswer = 'no';
    const userAnswerIsCorrect = isCorrect(userAnswer);
    assert.equal(userAnswerIsCorrect, false);    
    
});


/*

const isHuman = (creature) => {
    if (creature.isBipedal === true && !creature.hasFeathers) return true;
    else return false;
}

test('should return false if supplied with chester', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const chester = {
        name: "chester",
        hasFeathers: true,
        isBipedal: true,
    }
    //Act 
    // Call the function you're testing and set the result to a const
    const chesterIsHuman = isHuman(chester);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(dirtIsHuman, false);
});*/
