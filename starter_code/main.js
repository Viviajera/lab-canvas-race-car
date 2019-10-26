let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  ctx.fillStyle="pink";
  ctx.fillRect(0,0,1000,1600); 

  ctx.fillStyle="grey";
  ctx.fillRect(50,0,900,1600); 

  ctx.fillStyle="white";
  ctx.fillRect(70,0,20,1600); 

  ctx.fillStyle="white";
  ctx.fillRect(910,0,20,1600); 

  
  ctx.beginPath(); 
  ctx.setLineDash ([50,70]);
  ctx.lineWidth = 15;
  ctx.strokeStyle= "white"; 
  ctx.moveTo(500,0);
  ctx.lineTo(500,1600);
  ctx.stroke();
  ctx.closePath();

  // Iteration 2: car drawing
  car.draw();

  //
  // Iteration #4: obstacles
  var arrObstacles=[];
 
  function updateObstacles(){
    arrObstacles.push(new Obstacle);  
    var int =   setInterval(function(){
      for (i = 0; i < arrObstacles.length; i++) {
        arrObstacles[i].draw();
      arrObstacles[i].y += 15;
}},3000)
    

}
  updateObstacles();
  //
  // Iteration #5: collisions
  //

  // TODO

  //
  // Iteration #6: points
  //

  // TODO

}

document.onkeydown = function(e){
  switch (e.which){
    case 37:
    car.moveLeft(); 
    break; 
    case 39: 
    car.moveRight(); 
  }
}

  //if (!car) return;
  
  // TODO

let frames = 0;
function animLoop() {
  frames++;

  draw();
  
  if (!gameover) {
    requestAnimationFrame(animLoop);
  }
}

function startGame() {
  car = new Car();
  
  
 

  requestAnimationFrame(animLoop);
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();