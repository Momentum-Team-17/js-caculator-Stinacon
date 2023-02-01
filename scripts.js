// let numButton = document.querySelectorAll('.button.num');
// console.log(numButton);

// let sevenButton = document.querySelector('#seven');
// console.log(sevenButton);

// sevenButton.addEventListener('click', function (event) {
//     console.log(event.target.innerText);

// }
// )

//need to figure out how to loop the above event for all number buttons -- also how to make the number appear in the other box!!!
let numButtonArray = document.querySelectorAll('button.num');

for (let numButton of numButtonArray) {
    numButton.addEventListener('click', function (event) {
        console.log(event.target.innerText)
    }
    )
}
