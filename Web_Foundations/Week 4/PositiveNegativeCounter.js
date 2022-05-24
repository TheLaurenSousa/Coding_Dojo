// var poscount = 0;
// var negcount = 0;
// var arr= [-2,7,3,-5,-2, 3, 4];
// function arraycounter(arrayinput){
//     for (var i = 0; i<arrayinput.length; i++){
//         if (arrayinput[i] > 0){
//             poscount=poscount+1;
//         }
//         else if (arrayinput[i] <0){
//             negcount=negcount+1;
//             }
//         }
//     console.log(poscount);
//     }

// function arrayvalue(arrayinput){
//     if (poscount > negcount){
//         console.log("Wow, you're like, SUPER positive!")
//     }
//     else if (negcount > poscount){
//         console.log("Why do you have to be so negative?")
//     }
// }

// arraycounter(arr);
// arrayvalue(arr);


function countPositives(arrayInput){
    var posCount = 0
    var negCount = 0
    for (var i=0; i<arrayInput.length; i++){
        if (arrayInput[i]>0){
            posCount++
        }
        else if (arrayInput[i]<0){
            negCount++
        }
    }
    if (posCount>=negCount){
        return posCount
    }
    else{
        return "Why do you have to be so negative?"
    }
}

console.log(countPositives([2,-4,-6,-2]))