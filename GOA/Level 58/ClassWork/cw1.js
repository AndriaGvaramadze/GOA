class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  
  volume() {
    return this.length * this.width * this.height;
  }
}

const cuboid = new Cuboid(3, 4, 5);
console.log(cuboid.volume());  // Outputs: 60
