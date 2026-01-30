console.log('Hello from app.js! Your JavaScript is connected and runing!')

import * as orderHandler from './order-handler.js';

const orderForm = document.getElementById('order-form');
const orderSummary = document.getElementById('order-summary');


const handleOrderSubmit = function (event) {
    event.preventDefault();
    const inputs = orderHandler.getOrderInputs();
    console.log(inputs);
    const messege = `Ordered ${inputs.qty} ${inputs.size} where gift wrap is ${inputs.giftWrap}`;
    console.log(messege);
    orderSummary.textContent = messege;
};

document.addEventListener('DOMContentLoaded', function(){
    console.log(`DOM fully loaded and parsed, App is ready for interaction`);
    init();
});

const init = function() {
    orderForm.addEventListener('submit', handleOrderSubmit);
    console.log('app initialized')
}