//Завдання вирішив виконати написав дуже просту функцію
//Це дає можливість додати трохи інтерактивності

function averageGrade(grade) {
    if (grade < 0 || grade > 100) {
        console.log('Невірна оцінка')
    } else if (grade < 60) {
        console.log('Незадовільно')
    } else if (grade >= 60 && grade <= 70) {
        console.log('Задовільно')
    } else if (grade >= 71 && grade <= 80) {
        console.log('Добре')
    } else if (grade >= 81 && grade <= 90) {
        console.log('Дуже Добре')
    } else {
        console.log('Відмінно')
    } 
}

averageGrade(100)





