const buttons = document.querySelectorAll('.button'); //store all the buttons in a node list
const screen = document.querySelector('#Display'); // store the Display Screen in  variable for easy use

buttons.forEach(function (b) {
    b.addEventListener('click', function (e) { // it will listen to 'click' event, and refer to the event of click as 'e'
        const bgColor = window.getComputedStyle(e.target).getPropertyValue('background-color');
        // "window.getComputedStyle(e.target)" gets all the style from the target i.e. the element which was clicked.
        //getPropertyValue('background-color') gets the value of the 'background-color' attribute.
        screen.style.backgroundColor = bgColor; 
    });
});