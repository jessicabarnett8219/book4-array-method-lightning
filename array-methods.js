
// 1) Make an array from the one below called fave_demo that contains only ages from 18 - 49
let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102]
let _18through49 = ages.filter( age => age >= 18 && age <= 49)

// 2) Choose a loop method of your choice to get this result from this array: // expected result: TODO figure out how to chain splic on to .map
// `[3, 5, 7, 9, 11, 13]`

let nums = [1, 2, 3, 4, "5", 6, "7"]

let newNumbers = nums.map( (number, index, array) => {
  let nextIndex = index + 1
  let nextNumber = parseInt(array[nextIndex])
  return (parseInt(number) + nextNumber)
})

newNumbers.splice(-1, 1)

console.log(newNumbers)

// 3) Capitalize 'the', insert a comma after 'teacher' and output "Yoda says, "The greatest teacher, failure is"



// 4)  * Sort the following numbers in descending order * Remove any integers greater than 19. * Multiply each remaining number by 1.5 and then substract 1. * Then output (either in the DOM or the console) the sum of all the resulting numbers.
const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8]







