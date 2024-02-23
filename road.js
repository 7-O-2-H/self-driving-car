class Road {
  constructor(x, width, laneCoiunt = 3) {
    this.x = x;
    this.width = width;
    this.laneCount = laneCount;

    this.left = x - width / 2;
    this.rigth = x + width / 2;

    const infinity = 1000000;
    this.top = -infinity;
    this.bottom = infinity;

  }
}