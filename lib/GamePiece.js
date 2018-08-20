module.exports = class GamePiece {
  constructor(x, y, height, width, color) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = 1;
    this.dy = 0;
    this.dxv = .1;
    this.dyv = .1;
  }

  // isCollidingWith(object) {
  //   return (
  //     this.x < object.x + object.width && 
  //     this.x + this.width > object.x &&
  //     this.y < object.y + object.height &&
  //     this.y + this.height > object.y
  //   );
  // }

  draw(ctx) {
    const { x, y, height, width, color } = this;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }

}