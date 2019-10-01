import { isCorrect } from './functions.js';
const myButton = document.getElementById('action-button');

myButton.onclick = () => {
    alert('welcome to my quiz!');

    const userAnswer = prompt('is my favorite color burple? (yes/no)');
    const sanitizedUserAnswer = userAnswer.toLowerCase().trim();

    isCorrect(sanitizedUserAnswer);

};

// reveal the hidden paragraph
function revealResults() {
    const hideMe = document.getElementById('surprise');
    hideMe.classList.remove('hidden');
}