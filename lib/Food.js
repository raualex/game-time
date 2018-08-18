const GamePiece = require('./GamePiece');

module.exports = class Food extends GamePiece {
  constructor(x, y, height, width, color, borderColor) {
    super(x, y, height, width, color);

    // this.x = x
    // this.y = 
    this.borderColor = borderColor;
  
  }

    draw(ctx) {
    const {x, y, height, width, color, borderColor } = this;

    // call parent class draw function
    super.draw(ctx);
    console.log(x, y);
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  } 
}