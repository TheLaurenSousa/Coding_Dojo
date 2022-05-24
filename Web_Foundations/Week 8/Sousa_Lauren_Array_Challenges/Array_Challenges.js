// 1. Always Hungry
// Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.
function alwaysHungry(arrayInput){
    var count = 0;
    for (var i = 0; i < arrayInput.length; i++){
        if (arrayInput[i] == "food"){
            count += 1;
            console.log("Yummy!")
        }
    }
    if (count == 0){
        console.log("I'm Hungry!")
    }
}
alwaysHungry([1,2,3,4]);

// 2. High Pass Filter
// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.
function highPass(arr, cutoff){
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > cutoff){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr
}
var result = highPass([6,8,3,10,-2,5,9], 5);
console.log(result);

// 3. Better than average
// Given an array of numbers return a count of how many of the numbers are larger than the average.
function betterThanAverage(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    } 
    var average = sum/arr.length;
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > average){
            count += 1;
        }
    }
    return count;
}
var result = betterThanAverage([6,8,3,10,-2,5,9]);
console.log(result);

// 4. Array Reverse
// Write a function that will reverse the values an array and return them.
function reverse(arr){
    var reversedArr = [];
    for (var i = arr.length-1; i > -1; i--){
        reversedArr.push(arr[i]);
    }
    arr = reversedArr;
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

// 5. Fibonacci Array
// Fibonacci numbers have been studied for years and appear often in nature. Write a function that will return an array of Fibonacci numbers up to a given length n. 
// Fibonacci numbers are calculated by adding the last two values in the sequence together. So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.
function fibonacciArray(n){
    var fibArr = [0,1];
    for (var i = 2; i < n; i++){
        fibArr[i] = (fibArr[i-2]+fibArr[i-1]);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result);