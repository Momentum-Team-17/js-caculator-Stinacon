// let numButton = document.querySelectorAll('.button.num');
// console.log(numButton);

// let sevenButton = document.querySelector('#seven');
// console.log(sevenButton);

// sevenButton.addEventListener('click', function (event) {
//     console.log(event.target.innerText);

// }
// )

//need to figure out how to loop the above event for all number buttons -- also how to make the number appear in the other box!!!
let buttonArray = document.querySelectorAll('.button');
let display = document.querySelector('#result-space');
const filledDisplay = []
for (let button of buttonArray) {
    button.addEventListener('click', function (event) {
        // console.log(event.target.innerText)
        let buttonText = event.target.innerText;
        filledDisplay.push(buttonText);
        display.innerText = filledDisplay.join("")
    }
    )
}
let equalButton = document.querySelector('#equals');

equalButton.addEventListener('click', function (event) {
    //make the previous calculation evaluate and show up in the "filledDisplay"
    const answer = eval(display.innerText)
    console.log(answer);
})

let clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', function (event) {

})
//how do i "capture" the inner text of the click event to move to the target, "result-space"?
//something about appendChild(text)?

//^selects where I want the inner text of my number button to go???
//let existingElement = document.querySelector('.empty-div')
// First select where you want to place the new content

//let newElement = document.createElement('div')
// Create the new element
//let text = document.createTextNode('Hello there!')
// Create some text
//newElement.appendChild(text)
// Add text to new element
//existingElement.appendChild(newElement)
// Add that element to the DOM