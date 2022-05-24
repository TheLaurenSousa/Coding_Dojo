

function generateTeam(){
    var teamName = document.getElementById('name').value
    var nameLocations = document.querySelectorAll('.teamName')
    for(var i = 0; i<nameLocations.length; i++){
        nameLocations[i].innerText = teamName;
    }
}
console.log(parseInt(Math.random()*10))
function playFootball(){
    var selectedPlay = document.querySelector('#type').value
    if(selectedPlay=="run"){
        var yards = parseInt(Math.random()*10)
    }
    else if(selectedPlay=="pass"){
        var yards = parseInt(Math.random()*25)
    }
    else{
        var yards = parseInt(Math.random()*70)
    }
    var toTheEZ = parseInt(document.querySelector('#toTheEZ').innerText)
    toTheEZ -= yards
    if(toTheEZ<=0){
        document.querySelector('#container').innerHTML ="<h1>Touchdown</h1>"
        return
    }
    document.querySelector('#toTheEZ').innerText = toTheEZ

    var yardsToGo = document.querySelector('#yardsToGo')
    if(yards >= parseInt(yardsToGo.innerText)){
        if(toTheEZ<10){
            yardsToGo.innerText = toTheEZ
        }
        else{
            yardsToGo.innerText = 10
        }
        document.querySelector('#downCounter').innerText = "First"
    }
    else{
        yardsToGo.innerText = parseInt(yardsToGo.innerText)-yards
        if(document.querySelector('#downCounter').innerText =="First"){
            document.querySelector('#downCounter').innerText = "Second"
        }
        else if(document.querySelector('#downCounter').innerText == "Second"){
            document.querySelector('#downCounter').innerText = "Third"
        }
        else if(document.querySelector('#downCounter').innerText == "Third"){
            document.querySelector('#downCounter').innerText = "Fourth"
        }
        else{
            document.querySelector('#container').innerHTML ="<h1>YOU LOSE</h1>"
        } 
    }
}

