class Game {
  first;
  second;
  third;
  constructor() {
    this.first = Math.floor(Math.random() * (10)) + 1;
    this.second = Math.floor(Math.random() * (10)) + 1;
    this.third = Math.floor(Math.random() * (10)) + 1;
  }

  check = (input) => {
    var result = 0;
    if (input % this.first === 0) result++;
    if (input % this.second === 0) result++;
    if (input % this.third === 0) result++;
    return result === 3 ? "Win" : result;
  }
};