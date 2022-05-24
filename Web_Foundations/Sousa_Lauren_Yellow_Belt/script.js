var ninjaValue = 314;
var piratesValue = 159;

function subscribeAccept(id){
    var element = document.querySelector(id);
    element.remove();
}

function ninjaPoint(){
    var ninjaCurrent = document.querySelector("#ninjaScore");
    ninjaValue++;
    ninjaCurrent.innerText = ninjaValue;
}

function piratesPoint(){
    var piratesCurrent = document.querySelector("#piratesScore");
    piratesValue++;
    piratesCurrent.innerText = piratesValue;
}

setTimeout(message, 13000);

function message(){
    alert("The Ninjas have won!");
}

