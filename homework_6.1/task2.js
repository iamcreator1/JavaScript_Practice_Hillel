// It’s also possible to make it shorter, but at my current level of understanding JavaScript, 
// this version looks readable and easy to understand.

function verifyAge(age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}

console.log(verifyAge(15)) //return false
console.log(verifyAge(25)) //return true

