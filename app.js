import { isYes } from './isYes.js';
const myButton = document.getElementById('action-button');

myButton.onclick = () => {
    // Declare correct answer tracker and name string
    let numberCorrect = 0;

    // Start the Quiz
    alert('Welcome to my quiz!');

    // Ask their name and store the variable
    let name = prompt('What is your name?');

    // Return if they don't want to take the quiz
    const shouldProceed = confirm(name + ', are you sure about this?');
    if (!shouldProceed)
        return;
    
    // Question One - correct answer is yes
    const userAnswerOne = prompt('Lightning: does it ever bring Seth down? (yes/no)');
    const sanitizedUserAnswerOne = userAnswerOne.toLowerCase().trim();
    if (isYes(sanitizedUserAnswerOne))
        numberCorrect++;

    // Question Two - correct answer is no
    const userAnswerTwo = prompt('Is Seth ignorant and ambivalent about the effectiveness of Toad Style? (yes/no)');
    const sanitizedUserAnswerTwo = userAnswerTwo.toLowerCase().trim();
    if (!isYes(sanitizedUserAnswerTwo))
        numberCorrect++;
    
    // Question Three - correct answer is yes
    const userAnswerThree = prompt('Now the big one, ' + name + '... JEANS? (yes/no)');
    const sanitizedUserAnswerThree = userAnswerThree.toLowerCase().trim();
    if (isYes(sanitizedUserAnswerThree))
        numberCorrect++;

    // Tell the user how many they got correct with percentage
    alert('Well done ' + name + '! Check the bottom of the page for your results.');

    // reveal the hidden paragraph and adjust size based on number correct  
    const hideMe = document.getElementById('surprise');
    hideMe.classList.remove('hidden');

    // Add the user's name to the results
    const nameSpan = document.getElementById('name-value');
    nameSpan.textContent = name;
    
    /* Stretch Goal - change the size of the hidden paragraph based on the result
    if (numberCorrect === 1)
        hideMe.classList.replace ('result-size', 'result-size-good');
    if (numberCorrect === 2)
        hideMe.classList.replace ('result-size', 'result-size-great');
    if (numberCorrect === 3)
        hideMe.classList.replace ('result-size', 'result-size-perfect');
    */

};