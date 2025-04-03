
//Цей приклад із switch я також реалізував як функцію.

function averageGradeSwitch(averageMark) {
    switch (true) {
        case averageMark < 0 || averageMark > 100:
            console.log('Невірна оцінка')
            break;
        case averageMark < 60:
            console.log('Незадовільно')
            break;
        case averageMark >= 60 && averageMark <= 70:
            console.log('Задовільно')
            break;
        case averageMark >= 71 && averageMark <= 80:
            console.log('Добре')
            break;
        case averageMark >= 81 && averageMark <= 90:
            console.log('Дуже Добре')
            break;
        default:
            console.log('Відмінно')
    }
}

averageGradeSwitch(101)



