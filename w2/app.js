console.log('Hello form app.js! Your JavaScript is connected and runing!')

// --- Part 1: Select HTML Elements ---
// We use document.GetElementById() to get refrence to an element by its unique ID
// We store these elements in const variables because the elements themselves will not change
const totalDisplayElement = document.getElementById("total-display");
const addItemButton = document.getElementById("add-item-btn")

// These variables will change as the user interacts with the page
let totalCost = 0;
const itemPrice = 15;

// --- Part 2: Define a Function that Reacts to a Click---
// A function is a block of code designed to perform a particular task.
const handleButtonClick = function() {
    //totalCost = totalCost + 1;
    // Increase totalCost by 1 each time the button is clicked
    totalCost += 1;
    // Template strings (literal) to easily combine our variables and text into one message
    let messege = `Hello, ! You have clicked the button ${totalCost} time(s).`;

    // This is basic decision-making in JavaScript!
    // Use a simple 'if' statement to make our page react differently based on totalCost.
    if(totalCost >= 5) {
        // We can even change the style of an HTML element directly with JavaScript!
        // Change text color
        messege += ` Wow, you are a super clicker`;
        totalDisplayElement.style.color = `purple`
    } else {
        totalDisplayElement.style.color = `red`
    }
    // Update the text content of our paragraph element on the page.
    // This is how JavaScript makes changes visible on the web page!
    totalDisplayElement.textContent = messege

    console.log(`Button Clicked! Current click count ${totalCost}`)
};

//handleButtonClick(5)

// --- Part 3: Make the Button Clickable (Event Listener) ---
// This part ensures our JavaScript code runs only AFTER the HTML is fully loaded and parsed.
// The 'DOMContentLoaded' event is perfect for this. It fires when the HTML document is ready.
document.addEventListener('DOMContentLoaded', function(){
    console.log(`DOM fully loaded and parsed, App is ready for interaction`)
// Attach an event listener to our 'addItemButton.
// When 'addItemButton' receives a 'click' event, the 'handleButtonClick' function will execute.
    addItemButton.addEventListener(`click`, handleButtonClick)
    totalDisplayElement.textContent = `Welcome, ! Click button below to start counting.`
});
