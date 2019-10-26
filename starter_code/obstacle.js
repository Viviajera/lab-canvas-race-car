function random(from, to) {
  // TODO
}

class Obstacle {
  constructor() {
    this.w= Math.floor(Math.random()*800+30);
    this.h= 100;
    this.x= Math.floor(Math.random()*1000);
  }

  draw() {
    ctx.fillStyle ="black"; 
    ctx.fillRect(this.x,0,this.w,this.h); 
  }

  hits(car) {
    // TODO
  }
}