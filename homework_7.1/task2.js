function getReduction(num) {
    console.log(num)
       if (num > 0) {
        getReduction(num - 1)
       }
}

getReduction(10)


console.log('----------')

// another example of recursion. resolved in a classic way (explained by the mentor)
function countDown1(num) { 
    if (num <= 0) {      //base case (rule for exiting from function)
        return
    }
    console.log(num)    // actual action
    countDown1(num - 1) // recursion call
  }

  countDown1(0)
  countDown1(6)