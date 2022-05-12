var poscount = 0;
var negcount = 0;
var arr= [-2,7,3,-5,-2, 3, 4];
function arraycounter(arrayinput){
    for (var i = 0; i<arrayinput.length; i++){
        if (arrayinput[i] > 0){
            poscount=poscount+1;
        }
        else if (arrayinput[i] <0){
            negcount=negcount+1;
            }
        }
    console.log(poscount);
    }

function arrayvalue(arrayinput){
    if (poscount > negcount){
        console.log("Wow, you're like, SUPER positive!")
    }
    else if (negcount > poscount){
        console.log("Why do you have to be so negative?")
    }
}

arraycounter(arr);
arrayvalue(arr);

