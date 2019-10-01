import { isYes } from './isYes.js';
const myButton = document.getElementById('action-button');
const numberCorrect = 0;

myButton.onclick = () => {
    alert('Welcome to my quiz!');

    // Return if they don't want to take the quiz
    const shouldProceed = confirm('Are you sure about this?');
    
    // Question One - correct answer is yes
    const userAnswerOne = prompt('Lightning: does it ever bring Seth down? (yes/no)');
    const sanitizedUserAnswerOne = userAnswerOne.toLowerCase().trim();
    isYes(sanitizedUserAnswerOne);

    // Question Two - correct answer is no
    const userAnswerTwo = prompt('Is Seth ignorant and ambivalent about the effectiveness of Toad Style? (yes/no)');
    const sanitizedUserAnswerTwo = userAnswerTwo.toLowerCase().trim();
    isYes(sanitizedUserAnswerTwo);

    // Question Three - correct answer is yes
    const userAnswerThree = prompt('JEANS? (yes/no)');
    const sanitizedUserAnswerThree = userAnswerThree.toLowerCase().trim();
    isYes(sanitizedUserAnswerThree);



};

// reveal the hidden paragraph
function revealResults() {
    const hideMe = document.getElementById('surprise');
    hideMe.classList.remove('hidden');
}