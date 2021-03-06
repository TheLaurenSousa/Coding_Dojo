var player = {
    left: 450,
    top: 620
}
var enemies = [ //Added random placement to enemy positions
    {left: random(10,650), top: random(10,200)},
    {left: random(10,650), top: random(10,200)},
    {left: random(10,650), top: random(10,200)},
    {left: random(10,650), top: random(10,200)},
    {left: random(10,650), top: random(10,200)},
    {left: random(10,650), top: random(10,200)},
    {left: random(10,650), top: random(10,200)}
];
var missiles = [];


function random(max,min){
 return Math.floor(Math.random()* (max-min +1))+min;
}
function drawPlayer(){
    content = "<div class ='player' style='left:"+player.left+"px; top:"+player.top+"px'></div>";
    document.getElementById("players").innerHTML = content;
}

function drawEnemies(){
    content = "";
    console.log(enemies);
    for (var idx=0; idx<enemies.length; idx++){
        content += "<div class='enemy' style='left:"+enemies[idx].left+"px; top:"+enemies[idx].top+"px'></div>";
    }
    document.getElementById("enemies").innerHTML = content;
}

function drawMissiles(){
    content = "";
    for(var idx=0; idx<missiles.length; idx++){
        content += "<div class='missile' style='left:"+missiles[idx].left+"px; top:"+missiles[idx].top+"px'></div>"
    }
    document.getElementById("missiles").innerHTML = content;
}

function moveEnemies(){
    for (var idx=0; idx<enemies.length; idx++){
        enemies[idx].top = enemies[idx].top + 1;
        if(enemies[idx].top > 625){
            enemies[idx].top = 100;
        }
    }
}

function moveMissiles(){
    for (var idx=0; idx<missiles.length; idx++){
        missiles[idx].top = missiles[idx].top - 2;
    }
}

document.onkeydown = function(e){
    if(e.keyCode == 37 && player.left > 0){ //Left
        player.left = player.left - 10;
    }
    if(e.keyCode == 39 && player.left < 825){ // Right
        player.left = player.left + 10;
    }
    if(e.keyCode == 38 && player.top > 500){ //Up
        player.top = player.top - 10;
    }
    if(e.keyCode == 40 && player.top < 625){ //Down
        player.top = player.top + 10;
    }
    if(e.keyCode == 32){ //Fire
        missiles.push({left: (player.left+34), top: (player.top-8)})
        drawMissiles();
    }
    drawPlayer();
}

function gameloop(){
    drawPlayer();
    moveEnemies();
    drawEnemies();
    moveMissiles();
    drawMissiles();
    setTimeout(gameloop, 1)
}
gameloop();