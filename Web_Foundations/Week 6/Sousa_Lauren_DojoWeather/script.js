function cookieAccept(id){
    var element = document.querySelector(id);
    element.remove();
}

function convertToC(degree){
    return Math.round((degree-32)*(5/9));
}

function convertToF(degree){
    return Math.round(degree*(9/5)+32);
}

function convertTemp(element){
    for (var i=1; i<9; i++){
        var temp = document.querySelector("#temp"+i);
        var degree = parseInt(temp.innerText);
        if (element.value == "°C"){
            temp.innerText = convertToC(degree)+"°";
        }
        else{
            temp.innerText = convertToF(degree)+"°";
        }
    }
}