//Трохи помалював у консолі, але щоб було читабельно

console.log('Таблиця з for:\n')
function multiplicationTableFor(num) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`)
    }
}
multiplicationTableFor(5)
console.log('------------------------------')

console.log('Таблиця з while:\n')
function multiplicationTableWhile(number) {
    let i = 0
    while (i <= 10) {
        console.log(`${number} * ${i} = ${number * i}`)
        i++
    }
}
multiplicationTableWhile(5)

