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
//selects everything with the class "button" and puts them into an array
let display = document.querySelector('#result-space');
//finds the element with the id of "result-space"
let resultBarArray = []
for (let button of buttonArray) {
    button.addEventListener('click', function (event) {
        //listens to the event "click" on each button
        // console.log(event.target.innerText)
        let buttonText = event.target.innerText;
        resultBarArray.push(buttonText);
        display.innerText = resultBarArray.join("")
    }
    )
}
let equalButton = document.querySelector('#equals');

equalButton.addEventListener('click', function (event) {
    //make the previous calculation evaluate and show up in the "filledDisplay"
    const answer = eval(display.innerText)
    console.log(answer);
    display.innerText = answer;
})



let clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', function (event) {
    display.innerText = "";
    resultBarArray = [];
    //add some sort of "remove" function to remove the text from the display? or #result-space
})
