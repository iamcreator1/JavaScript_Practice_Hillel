function checkOrder(available = 0, ordered = 0) {
    if (available < ordered) {
        return 'Your order is too large, we don’t have enough goods.'
    } else if (ordered === 0) {
        return 'Your order is empty'
    } else {
        return 'Your order is accepted'
    }
}

console.table(checkOrder(5, 10)) //'Your order is too large, we don’t have enough goods.'
console.log(checkOrder(undefined, 0)) //'Your order is empty'
console.log(checkOrder(10, 5)) //'Your order is accepted'
