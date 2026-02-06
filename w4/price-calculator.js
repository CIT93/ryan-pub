// Set prices for shirts and gift wrap
const shirtPrice = 15;
const giftWrapPrice = 2;

// redoing code so the math is done inside of "calculateTotal" and not checkoutPrice 
export const calculateTotal = function(inputs) {
    // Prove object is passed and function is running
    console.log(`Inside checkoutPrice function.`);
    console.log('Here is our shirt order quantity: ', inputs.qty)
    
    // Calculate the price; (quantity * ShirtPrice) + (giftWrap IF giftwrap is selected.)
    if (inputs.giftWrap) {
        return { totalPrice: giftWrapPrice + shirtPrice * inputs.qty};
    }else {
        return { totalPrice: shirtPrice * inputs.qty};
    }
};


// --- Bad code graveyard below :( ---

// const checkoutPrice = function(qty, giftWrap) {

//     // Prove object is passed and function is running
//     console.log(`Inside checkoutPrice function.`);
//     console.log('Here is our shit oreder quantity: ', qty);

//     // Calculate the price; (quantity * ShirtPrice) + (giftWrap IF giftwrap is selected.)
//     if (giftWrap) {
//        return giftWrapPrice + shirtPrice * qty;
//     } else {
//         return (shirtPrice * qty);
//     };

//     // const totalPrice = if (inputs.giftWrap) {
//     //     giftWrapPrice + shirtPrice * inputs.qty
//     // } else {
//     //     shirtPrice * inputs.qty
//     // }
// };

// // Make an empty object called total price that we can update with the calculated price later.
// export const calculateTotal = function(inputs) {
//     const totalPrice = checkoutPrice(inputs.qty, inputs.giftWrap);

//     console.log('Total price inside price calculator after we calculate total: ', totalPrice)

//     return{
//         totalPrice: totalPrice,
//     }
// }