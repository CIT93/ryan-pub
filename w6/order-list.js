const tBody = document.getElementById('order-table-body');

export const renderOrders = function (orders) {
    tBody.innerHTML = '';

    for (const order of orders) {
        const row = createRow(order);
        tBody.appendChild(row);
    } 

}

const createRow = function (order) {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>WIP</td>
        <td>${(order.qty)}</td>
        <td>${(order.size)}</td>
        <td>${order.totalPrice}</td>
        <td>${(order.giftWrap)}</td>
        <button>Delete</delete>
    `;
    return row
}