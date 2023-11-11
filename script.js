const container = document.querySelector('div');
const button = document.querySelector('button');
let amountOfSquaresPerSide;

button.addEventListener('click', () => { 
    userInput = prompt('Enter amount of squares per side');
    amountOfSquaresPerSide = parseInt(userInput);
    for (let i = 0; i < amountOfSquaresPerSide ** 2; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
});