
//function declaration 
function getAreaRectangle(width, height) {
    let result
    result = width * height
    return result
}
console.log(`Area of a rectangle from getAreaRectangle function = ${getAreaRectangle(5, 10)}`)
console.log('---------------------')

//function expression. it’s basically an anonymous function, but I just assigned it to a variable.
const getAreaRectangleExp = function (width, height) {
    return width * height
}
console.log(`Area of a rectangle from getAreaRectangleExp function = ${getAreaRectangleExp(10, 15)}`)
console.log('---------------------')

//arrow function 
const getAreaRectangleArrow = (width, height) => {
    let result = width * height;
    return result
}
console.log(`Area of a rectangle from getAreaRectangleArrow function = ${getAreaRectangleArrow(11, 11)}`)
console.log('---------------------')
