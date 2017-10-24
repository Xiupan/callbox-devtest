
// Exercise 1
const arraySplit = (inputArray) => {
  let sortedArray = inputArray.sort(function(a,b){return a-b})
  let arrayOne = []
  let arrayTwo = []
  let arrayThree = []
  for (var i = 0; i < (sortedArray.length/3); i++) {
    arrayOne.push(sortedArray[i])
    arrayTwo.push(sortedArray[Math.ceil(sortedArray.length/3)+i])
    arrayThree.push(sortedArray[(Math.ceil(sortedArray.length/3)*2)+i])
  }
  for (var k = 0; k < arrayOne.length; k++) {
    if (arrayOne[k] === undefined) {
      arrayOne.splice(k,1)
    }
  }
  for (var p = 0; p < arrayTwo.length; p++) {
    if (arrayTwo[p] === undefined) {
      arrayTwo.splice(p,1)
    }
  }
  for (var d = 0; d < arrayThree.length; d++) {
    if (arrayThree[d] === undefined) {
      arrayThree.splice(d,1)
    }
  }
  let parentArray = [arrayOne, arrayTwo, arrayThree]
  return parentArray
}

const testArray = [2,1,3,4,7,5,9,6,8,13,12,11,10,0,15,16,14]

console.log(arraySplit(testArray));



// Exercise 2
const find_frequency = (letter, inputString) => {
  let letterCount = 0
  const newArray = inputString.split("")
  for (var i = 0; i < newArray.length; i++) {
    if (newArray[i] === letter) {
      letterCount += 1
    }
  }
  return letterCount
}

// console.log(find_frequency("t", "this is a test"));
// console.log(find_frequency("y", "this is a test"));



// Exercise 3
const is_power_two = (number) => {
  let powerArray = []
  for (var i = 1; (Math.pow(2,i)) <= number; i++) {
    powerArray.push(Math.pow(2,i))
  }

  for (var k = 0; k < powerArray.length; k++) {
    if (powerArray[k] === number) {
      return true
    }
  }

  return false
}

// console.log(is_power_two(6)); // should return false
// console.log(is_power_two(16)); // should return true
