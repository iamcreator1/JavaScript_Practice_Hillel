function handleNum(num, callback1, callback2) {
    if (num % 2 === 0) {
        callback1()
    } else {
        callback2()
    }
}

function handleEven() {
    console.log('number is even')
}

function handleOdd() {
    console.log('number is odd')   
}


handleNum(12, handleEven, handleOdd)
handleNum(11, handleEven, handleOdd)