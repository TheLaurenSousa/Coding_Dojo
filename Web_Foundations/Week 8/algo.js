// Write a function that given an array, returns whether the sum of all elements is even or odd
// Example: EvenOrOdd([1,2,3,4]) should return "even" while EvenOrOdd([1]) should return "odd"

// function evenOrOdd(arrayInput){
//     var sum = 0;
//     for (var i=0; i<arrayInput.length; i++){
//         if (!isNaN(arrayInput[i])){
//             sum +=arrayInput[i];
//         }
//     }
//     if (sum%2==0){
//         return "even"
//     }
//     else{
//         return "odd"
//     }
// }
// console.log(evenOrOdd([1,2,3,4,"fish"]))


// Write a function that given an array, returns a string detailing how many even numbers, odd numbers, and non-numbers exist in that array
// Example: stringContents([1,2,3,4,5,"football"]) should return "2 even number(s), 3 odd number(s), and 1 non-number(s)"

// function stringContents(arrayInput){
//     var evenCount = 0;
//     var oddCount = 0;
//     var nonCount = 0;
//     for (var i=0; i<arrayInput.length; i++){
//         if (arrayInput[i]%2==0){
//             evenCount++;
//         }
//         else if (arrayInput[i]%2==1){
//             oddCount++;
//         }
//         else{
//             nonCount++;
//         }
//     }
//     var results = evenCount+" even number(s), "+oddCount+" odd number(s), "+nonCount+" non-number(s).";
//     return results
// }

// console.log(stringContents([1,2,3,4,5,"football"]))

// OR (both work)

// function arrayContents(arrayInput){
//     var contents = {
//         'evens' : 0,
//         'odds' : 0,
//         'neither' : 0
//     }
//     for (var i=0; i<arrayInput.length; i++){
//         if (arrayInput[i]%2==0){
//             contents['evens']++
//         }
//         else if (arrayInput[i]%2==1){
//             contents['odds']++
//         }
//         else{
//             contents['neither']++
//         }
//     }
//     return contents['evens'] + " even number(s), "+contents['odds']+" odd number(s), and "+contents['neither']+" non-number(s)" 
// }
// console.log(arrayContents([1,2,3,4,5,"football"]))


// Class Stuff



// var myobject = {
//     'numbers' : [1,2,3,4,5],
//     'colors' : ['blue', 'red', 'orange'],
//     'fish' : ['salmon', 'tuna', 'albacore']
// }

// var my2ndobject = {
//     'shoes' : ['birkenstocks', 'jordans', 'crocs'],
//     'hats' : ['baseball cap', 'fedora', 'pinwheel']    
// }

// function iterateObject(objectInput){
//     for (key in objectInput){
//         console.log(key, objectInput[key])
//         for(var i=0; i<objectInput[key].length; i++){
//             console.log(objectInput[key][i])
//         }
//     }
// }

// iterateObject(myobject)



// var arrayexample=[1,9,3,true]

// for (var i=arrayexample.length-1; i>=0; i--){
//     console.log(arrayexample[i])
// }



// function palindroneCheck(myword){
//     for (var i=0; i<=(myword.length/2)-1; i++){
//         console.log(myword[i], myword[myword.length-1-i])
//         if (myword[i] != myword[myword.length-1-i]){
//             return "not a palindrone"
//         }
//     }
//     return "This is a palindrone"
// }

// console.log(palindroneCheck("racecar"))