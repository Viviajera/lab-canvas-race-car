class Car {
      constructor (){ 
    // this.img
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalHeight;
        this.w= 100;
        this.h=this.w/imgRatio; 
        this.x=500-this.w/2; 
        this.y=1600-100-this.h; 
    }
    img.src = "images/car.png";
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
    ctx.drawImage(this.img,this.x,this.y, this.w,this.h);
  }

  moveLeft() {
  this.x-=15;
  }
  moveRight() {
  this.x+=15;
  }
}