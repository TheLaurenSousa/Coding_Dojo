// Write a function that will return how many even numbers exist inside a given array, 
// but will return false if there are no even numbers. 
// Reset the count and print "Wow a Three!" if you encounter a 3.

var arr = [2,3,4,6,7]

function arrayCounter(arrayInput){
    var counter = 0;
    var posarr = [];
    for (var i = 0; i<arrayInput.length; i++){
        if (arrayInput[i] %2 == 0 & arrayInput[i] > 0){
            counter = counter+1;
            posarr.push(arrayInput[i])
        }
        else if (arrayInput[i] == 3){
            counter = 0;
            console.log("Wow a Three!");
        }
    }
    console.log(posarr);
    if(counter == 0){
        return(false);
    }
    return counter;
}

console.log(arrayCounter(arr));