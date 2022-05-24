// Square the Value
// Write a function that squares each value in a given Array, returning that same array with changed values. Example: [1,2,3] -> [1,4,9] and [0,-2,5] -> [0,4,25]
// Bonus: Create a separate function that returns whether or noth a given value has a whole number square root.

// var arr = [0,1,2,3,4]
// function squareIt(){
//     for (var i=0; i<arr.length; i++){
//         arr[i] *=arr[i];
//     }
//     return arr
// }
// console.log(squareIt(arr));

// Doesn't work
// function squareRootIt(arr){
//     for (var i = 1; i<arr.length; i++){
//         if(i*i == arr){
//             return true
//         }
//         else if (i*i>arr){
//             return false
//         }
//     }
// }
// console.log(squareRootIt(arr));

// Shift Array Values
// Create a function that given an Array, moves all values forward by one index, dropping the first and leaving a '0' value at the end. Example: [1,2,3,4,5,6] -> [2,3,4,5,6,0]
// Bonus: Do the same while also removing all negative values. Example: [1,2,3,-4,5,6] -> [2,3,5,6,0] (look into Array.pop())

// function shift(arrayInput){
//     for (i=0; i<arrayInput.length-1; i++){
//         arrayInput[i] = arrayInput[i+1]
//     }
//     arrayInput[arrayInput.length-1] = 0
//     return arrayInput
// }
// console.log(shift([1,2,3,4,5,6]))