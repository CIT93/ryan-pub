console.log('Hello from app.js! Your JavaScript is connected and runing!')

import * as orderHandler from './order-handler.js';
import * as priceCalculator from './price-calculator.js';
import * as totalDisplay from './total-display.js';

const orderForm = document.getElementById('order-form');
const orders = [];

const handleOrderSubmit = function (event) {
    event.preventDefault();
    const inputs = orderHandler.getOrderInputs();
    console.log(inputs);
    const messege = `Ordered ${inputs.qty} ${inputs.size} where gift wrap is ${inputs.giftWrap}`;

    // When the submit button is pushed the above lines prevent the default submit behavior and create and object called "inputs".
    // We pass that "inputs" object to the calculateTotal function and call the function with the line below.
    const total = priceCalculator.calculateTotal(inputs);
    console.log("is it returning the total price now? >>>", total.totalPrice);

    console.log(messege);

    const newOrder = {
        ...inputs,
        ...total,
        timestamp: new Date().toISOString()
    };

    orders.push(newOrder);
    console.log(`Here is the order array: `, orders);

    totalDisplay.displaySummary(inputs, total);
};

document.addEventListener('DOMContentLoaded', function () {
    console.log(`DOM fully loaded and parsed, App is ready for interaction`);
    init();
});

const init = function () {
    orderForm.addEventListener('submit', handleOrderSubmit);
    console.log('app initialized')
}