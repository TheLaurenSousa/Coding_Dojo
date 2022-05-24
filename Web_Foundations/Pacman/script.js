function beginWorld1(){
    var pacmanDiv = document.getElementById("pacman");
    var scoreboardDiv = document.getElementById("scoreboard");
    var ghost1Div = document.getElementById("ghost1");
    var ghost2Div = document.getElementById("ghost2");
    var ghost3Div = document.getElementById("ghost3");
    pacmanDiv.style.display = "inline";
    scoreboardDiv.style.display = "inline";
    ghost1Div.style.display = "inline";
    ghost2Div.style.display = "inline";
    ghost3Div.style.display = "inline";
    displayWorld(world1);
    displayPacman();
    displayGhost();
    playGame(world1);
}

// World Creation
// 0 = brick, 1 = empty, 2 = coin, 3 = cherry 
var world1 = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,0,1,1,0,0,3,2,0,0,2,2,0,0,1,1,0,2,0],
    [0,2,0,2,2,0,1,1,1,1,1,1,1,1,0,2,3,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,2,0],
    [0,2,0,2,0,0,2,0,1,1,1,1,0,2,0,0,2,0,2,0],
    [0,3,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,3,0],
    [0,2,0,2,0,0,2,0,1,1,1,1,0,2,0,0,2,0,2,0],
    [0,2,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,2,0],
    [0,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,0],
    [0,2,0,3,2,0,1,1,1,1,1,1,1,1,0,2,2,0,2,0],
    [0,2,0,1,1,0,0,2,2,0,0,2,2,0,0,1,1,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

function displayWorld(worldInput){
    var output = '';
    for (var i=0; i<worldInput.length; i++){
        output += "\n<div class='row'>\n";
        for (var j=0; j<worldInput[i].length; j++){
            if(worldInput[i][j] == 0){
                output += "\n<div class='brick'></div>";
            }
            else if(worldInput[i][j] == 1){
                output += "\n<div class='empty'></div>";
            }
            else if(worldInput[i][j] == 2){
                output += "\n<div class='coin'></div>";
            }
            else if(worldInput[i][j] == 3){
                output += "\n<div class='cherry'></div>";
            }
            // else if(worldInput[i][j] == 4){
            //     output += "\n<div id='ghost1'></div>";
            // }
            // else if(worldInput[i][j] == 5){
            //     output += "\n<div id='ghost2'></div>";
            // }
            // else if(worldInput[i][j] == 6){
            //     output += "\n<div id='ghost3'></div>";
            // }
        }
        output += "</div>";
    }
    document.getElementById('world').innerHTML = output;
}

// Initial Position
var pacman = {
    x: 1,
    y: 1
};

function displayPacman(){
    document.getElementById('pacman').style.left = pacman.x*44+"px"
    document.getElementById('pacman').style.top = pacman.y*44+"px"
}

// Display Ghosts
var ghost1 = {
    x: 12,
    y: 1
};

var ghost2 = {
    x: 10,
    y: 13
};

var ghost3 = {
    x: 18,
    y: 13
};
function displayGhost(){
    document.getElementById('ghost1').style.left = ghost1.x*44+"px"
    document.getElementById('ghost1').style.top = ghost1.y*44+"px"
    document.getElementById('ghost2').style.left = ghost2.x*44+"px"
    document.getElementById('ghost2').style.top = ghost2.y*44+"px"
    document.getElementById('ghost3').style.left = ghost3.x*44+"px"
    document.getElementById('ghost3').style.top = ghost3.y*44+"px"
}

// Player Movements
var score = 0;
function playGame(worldInput){
    document.onkeydown = function(e){
        if (e.keyCode == 37 && worldInput[pacman.y][pacman.x-1] !=0){   //Left
                pacman.x--;
                document.getElementById('pacman').style.transform = "rotate(0)"; 
        }
        if (e.keyCode == 39 && worldInput[pacman.y][pacman.x+1] !=0){   //Right
                pacman.x++;
                document.getElementById('pacman').style.transform = "rotate(180deg)"; 
        }
        if (e.keyCode == 38 && worldInput[pacman.y-1][pacman.x] !=0){    //Up
                pacman.y--;
                document.getElementById('pacman').style.transform = "rotate(90deg)"; 
        }
        if (e.keyCode == 40 && worldInput[pacman.y+1][pacman.x] !=0){   //Down
                pacman.y++;
                document.getElementById('pacman').style.transform = "rotate(270deg)"; 
        }
    // Keep Score and Update background when move onto object
        if (worldInput[pacman.y][pacman.x] == 2){    //Coin 
            worldInput[pacman.y][pacman.x] = 1;
            score += 10;
        }
        if (worldInput[pacman.y][pacman.x] == 3){   //cherry
            worldInput[pacman.y][pacman.x] = 1;
            score += 50;
        }
    // Pacman collision with Ghost
        // if (worldInput[pacman.y][pacman.x] == worldInput[ghost1.y][ghost1.x] || worldInput[pacman.y][pacman.x] == worldInput[ghost2.y][ghost2.x] || worldInput[pacman.y][pacman.x] == worldInput[ghost3.y][ghost3.x]){
        if (pacman.x == ghost1.x && pacman.y == ghost1.y){
            document.querySelector('body').innerHTML ="<h1>YOU LOSE</h1>";
        }
        if (pacman.x == ghost2.x && pacman.y == ghost2.y){
            document.querySelector('body').innerHTML ="<h1>YOU LOSE</h1>";
        }
        if (pacman.x == ghost3.x && pacman.y == ghost3.y){
            document.querySelector('body').innerHTML ="<h1>YOU LOSE</h1>";
        }
        document.getElementById('total').innerText = score;
        displayWorld(worldInput);
        displayPacman();
        moveGhost(worldInput);
        displayGhost();
    }
}


// Ghost Movements

function moveGhost(worldInput){
    var temp1 = Math.floor(Math.random()*4);  //Picks a number between 0 and 3, each represents a direction
    var temp2 = Math.floor(Math.random()*4);  //Picks a number between 0 and 3, each represents a direction
    var temp3 = Math.floor(Math.random()*4);  //Picks a number between 0 and 3, each represents a direction
    if (temp1 == 0 && worldInput[ghost1.y][ghost1.x-1] !=0){   //Left
            ghost1.x--;
    }
    if (temp1 == 1 && worldInput[ghost1.y][ghost1.x+1] !=0){   //Right
            ghost1.x++;
    }
    if (temp1 == 2 && worldInput[ghost1.y-1][ghost1.x] !=0){    //Up
            ghost1.y--; 
    }
    if (temp1 == 3 && worldInput[ghost1.y+1][ghost1.x] !=0){   //Down
            ghost1.y++; 
    }
    if (temp2 == 0 && worldInput[ghost2.y][ghost2.x-1] !=0){   //Left
        ghost2.x--;
    }
    if (temp2 == 1 && worldInput[ghost2.y][ghost2.x+1] !=0){   //Right
            ghost2.x++;
    }
    if (temp2 == 2 && worldInput[ghost2.y-1][ghost2.x] !=0){    //Up
            ghost2.y--; 
    }
    if (temp2 == 3 && worldInput[ghost2.y+1][ghost2.x] !=0){   //Down
            ghost2.y++; 
    }
    if (temp3 == 0 && worldInput[ghost3.y][ghost3.x-1] !=0){   //Left
        ghost3.x--;
    }
    if (temp3 == 1 && worldInput[ghost3.y][ghost3.x+1] !=0){   //Right
            ghost3.x++;
    }
    if (temp3 == 2 && worldInput[ghost3.y-1][ghost3.x] !=0){    //Up
            ghost3.y--; 
    }
    if (temp3 == 3 && worldInput[ghost3.y+1][ghost3.x] !=0){   //Down
            ghost3.y++; 
    }
}

