// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { isYes } from '../isYes.js';
const test = QUnit.test;

// Only testing lower case because input is sanitized in app.js file

test('should return true if the user says yes', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userAnswer = 'yes';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const userAnswerIsCorrect = isYes(userAnswer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(userAnswerIsCorrect, true);
});

test('should return true if the user says y', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userAnswer = 'y';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const userAnswerIsCorrect = isYes(userAnswer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(userAnswerIsCorrect, true);
});

test('should return false if the user says no', function(assert) {
    const userAnswer = 'no';
    const userAnswerIsCorrect = isYes(userAnswer);
    assert.equal(userAnswerIsCorrect, false);    
    
});
