// Get a refrence to the T-shirt order form using the forms id
const orderForm = document.getElementById('order-form');

//Get refrences to the forms three sections
const shirtQty = orderForm.querySelector('#qty'); // Quantity of shirt form
const sizeRadio = orderForm.querySelectorAll("input[name='size']"); // Size radio button selector
const giftWrapCheckBox = orderForm.querySelector('#gift-wrap'); // Gift wrap check box


// We create a function called getShirtSizeValue that uses a for loop to go though all of the radios.
// The sizeRadio refrence gets all of the radios in a nodeList and we have to use the for loop to go through them all one by one.
// (const radio of sizeRadio) = create a variable called "radio" with a value 'of' each radio in the node list; one at a time.
const getShirtSizeValue = function () {
    for (const radio of sizeRadio) {
        if (radio.checked) {
            console.log(`${radio.value} is ${radio.checked}`);
            return radio.value
        }
    }
};

// Main function that will return the values of the user inputs as an object literal to the app.js

export const getOrderInputs = function () {
    return {
        qty: parseInt(shirtQty.value) || 1,
        size: getShirtSizeValue(sizeRadio),
        giftWrap: giftWrapCheckBox.checked
    }
}
