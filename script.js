//Use query Selectors to get the class of all the button shapes
const redLight = document.querySelector('.red-light');
const yellowLight = document.querySelector('.yellow-light');
const greenLight = document.querySelector('.green-light');

//Use getElementById which allows us to get the ID so that we can add an event listener to the buttons, listen for a click and then set the color via css properties.
const redSwitch = document.getElementById('red-switch');
const yellowSwitch = document.getElementById('yellow-switch');
const greenSwitch = document.getElementById('green-switch');

//Add event listeners that listen for a button click
redSwitch.addEventListener('click', () => {
    redLight.style.backgroundColor = 'red';
});
yellowSwitch.addEventListener('click', () => {
    yellowLight.style.backgroundColor = 'yellow';
});
greenSwitch.addEventListener('click', () => {
    greenLight.style.backgroundColor = 'green';
});

//Turn all lights on and off with their specific buttons


//Party Mode Button

//Turn all lights on and off at once with a single button