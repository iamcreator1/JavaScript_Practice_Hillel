function divide(numerator, denominator) {

    if (denominator === 0) {
        throw 'denominator is equal to 0'
    }
    if (typeof numerator !== 'number' && typeof denominator !== 'number') {
        throw `numerator and denominator have wrong type and they have - '${typeof numerator} and ${typeof denominator}' type`
    }
    if (typeof numerator !== 'number') {
        throw `numerator has wrong type and it has - '${typeof numerator}' type`
    }
    if (typeof denominator !== 'number') {
        throw `denominator has wrong type and it has - '${typeof denominator}' type`
    }

    const result = numerator / denominator
    return result
}

const a = 10
const b = 'hello'


try {
    const result = divide(a, b);
    console.log("Divide operation result", result);
} catch (error) {
    console.log(error)
} finally {
    console.log('Operation has been finished')
}





console.log('Hello World!')