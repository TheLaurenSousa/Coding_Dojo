// World Creation
// 0 = brick, 1 = empty, 2 = coin, 3 = cherry 
// 4 = red ghost 5 = orange ghost 6 = pink ghost
var world = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,2,2,2,2,2,2,2,2,5,2,2,2,2,2,2,2,2,0],
    [0,2,0,1,1,0,0,3,2,0,0,2,2,0,0,1,1,0,2,0],
    [0,2,0,2,2,0,1,1,1,1,1,1,1,1,0,2,3,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,2,0],
    [0,2,0,2,0,0,2,0,1,1,1,1,0,2,0,0,2,0,2,0],
    [0,3,1,1,1,1,1,0,1,1,4,1,0,1,1,1,1,1,3,0],
    [0,2,0,2,0,0,2,0,1,1,1,6,0,2,0,0,2,0,2,0],
    [0,2,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,2,0],
    [0,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,0],
    [0,2,0,3,2,0,1,1,1,1,1,1,1,1,0,2,2,0,2,0],
    [0,2,0,1,1,0,0,2,2,0,0,2,2,0,0,1,1,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

function displayWorld(){
    var output = '';
    for (var i=0; i<world.length; i++){
        output += "\n<div class='row'>\n";
        for (var j=0; j<world[i].length; j++){
            if(world[i][j] == 0){
                output += "\n<div class='brick'></div>";
            }
            else if(world[i][j] == 1){
                output += "\n<div class='empty'></div>";
            }
            else if(world[i][j] == 2){
                output += "\n<div class='coin'></div>";
            }
            else if(world[i][j] == 3){
                output += "\n<div class='cherry'></div>";
            }
            else if(world[i][j] == 4){
                output += "\n<div id='redGhost'></div>";
            }
            else if(world[i][j] == 5){
                output += "\n<div id='orangeGhost'></div>";
            }
            else if(world[i][j] == 6){
                output += "\n<div id='pinkGhost'></div>";
            }
        }
        output += "</div>";
    }
    document.getElementById('world').innerHTML = output;
}
displayWorld();

// Initial Position
var pacman = {
    x: 1,
    y: 1
};

function displayPacman(){
    document.getElementById('pacman').style.left = pacman.x*44+"px"
    document.getElementById('pacman').style.top = pacman.y*44+"px"
}
displayPacman();

// Player Movements
var score = 0;
document.onkeydown = function(e){
    if (e.keyCode == 37 && world[pacman.y][pacman.x-1] !=0){   //Left
            pacman.x--;
            document.getElementById('pacman').style.transform = "rotate(0)"; 
    }
    if (e.keyCode == 39 && world[pacman.y][pacman.x+1] !=0){   //Right
            pacman.x++;
            document.getElementById('pacman').style.transform = "rotate(180deg)"; 
    }
    if (e.keyCode == 38 && world[pacman.y-1][pacman.x] !=0){    //Up
            pacman.y--;
            document.getElementById('pacman').style.transform = "rotate(90deg)"; 
    }
    if (e.keyCode == 40 && world[pacman.y+1][pacman.x] !=0){   //Down
            pacman.y++;
            document.getElementById('pacman').style.transform = "rotate(270deg)"; 
    }
// Keep Score and Update background when move onto coin
    if (world[pacman.y][pacman.x] == 2){    //Coin 
        world[pacman.y][pacman.x] = 1;
        score += 10;
    }
    else if (world[pacman.y][pacman.x] == 3){   //cherry
        world[pacman.y][pacman.x] = 1;
        score += 50;
    }
// Ghost collision
    if (world[pacman.y][pacman.x] == 4 || world[pacman.y][pacman.x] == 5 || world[pacman.y][pacman.x] == 6){
            document.querySelector('body').innerHTML ="<h1>YOU LOSE</h1>";
    }
    document.getElementById('total').innerText = score;
    displayWorld();
    displayPacman();
}
