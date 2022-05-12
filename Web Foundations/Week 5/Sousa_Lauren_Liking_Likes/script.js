var neilTally = 4;
var nicholeTally = 7;
var jimTally = 3;
var neilReplacer = document.querySelector("#neilPost");
var nicholeReplacer = document.querySelector("#nicholePost");
var jimReplacer = document.querySelector("#jimPost");

function neilLike(){
    neilTally++;
    neilReplacer.innerText = neilTally+" Like(s)";
}

function nicholeLike(){
    nicholeTally++;
    nicholeReplacer.innerText = nicholeTally+" Like(s)";
}

function jimLike(){
    jimTally++;
    jimReplacer.innerText = jimTally+" Like(s)";
}