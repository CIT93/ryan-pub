const orderSummary = document.getElementById('order-summary');

const displayTotal = orderSummary.querySelector('#display-total');
const displayQty = orderSummary.querySelector('#display-qty');
const displayGift = orderSummary.querySelector('#display-gift');
const displaySize = orderSummary.querySelector('#display-size');

export const displaySummary = function(inputs, total) {
    orderSummary.style.display = 'block';

    displayTotal.textContent = total.totalPrice.toFixed(2);
    displayQty.textContent = inputs.qty;
    displaySize.textContent = inputs.size;

    // displayGift.textContent = inputs.giftWrap;

    if(inputs.giftWrap) {
        displayGift.textContent = "Gift wrap selected";
    } else {
        displayGift.textContent = "No gift wrap selected";
    };

    // switch(inputs.giftWrap){
    //     case true: displayGift.textContent = "Gift wrap selected";
    //     default: displayGift.textContent = "No gift wrap selected";
    // }
};

// Display already added: Step 2 Complete