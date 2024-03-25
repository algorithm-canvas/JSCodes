//it will select the query and hold in variable
const buttons = document.querySelectorAll('.button')

//it will select body tag name
const body = document.querySelector("body")

//loops on button because of node list
buttons.forEach((button) => {
    console.log(button);
    // add event for clicking
    button.addEventListener('click', (event) => {
        console.log(event);
        if (event.target.id == 'grey') {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id == 'white') {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id == 'blue') {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id == 'yellow') {
            body.style.backgroundColor = event.target.id
        }
    })
})