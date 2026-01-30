console.log('Hello from app.js! Your JavaScript is connected and runing!')

import * as orderHandler from './order-handler.js';

const orderForm = document.getElementById('order-form');

const handleSubmit = function (event) {
    event.preventDefault();
    const inputs = orderHandler.getOrderInputs();
    console.log(inputs);
};

document.addEventListener('DOMContentLoaded', function(){
    console.log(`DOM fully loaded and parsed, App is ready for interaction`);
    orderForm.addEventListener('submit', handleSubmit);
});
