import { makeAutoObservable, runInAction } from "mobx";

class AppStore {

  squares = null;

  initialized = false;

  m = 0;

  n = 0;

  success = false;

  constructor() {
    makeAutoObservable(this);
    this.init(4, 4);
  }

  init(m, n) {
    this.m = m;
    this.n = n;
    this.squares = [];
    for (let i = 0; i < m + 1; i++) {
      for (let j = 0; j < n; j++) {
        if (i == 0 && j < n - 1) {
          continue;
        }
        this.squares.push({ x: j, y: i, dx: j, dy: i, value: i * n + j })
        console.log({ x: j, y: i, dx: j, dy: i, value: i * n + j })
      }
    }
    this.initialized = true;
  }

  moveUp() {
    let { x, y } = this.board.squares[0];
    if (y < this.m) {
      this.swap(0, this.find(x, y + 1))
    }
  }

  moveDown() {
    let { x, y } = this.board.squares[0];
    if (y > 1 || (y === 1 && x === this.n - 1)) {
      this.swap(0, this.find(x, y - 1))
    }
  }

  moveLeft() {
    let { x, y } = this.board.squares[0];
    if (x < this.n - 1) {
      this.swap(0, this.find(x + 1, y))
    }
  }

  moveRight() {
    let { x, y } = this.board.squares[0];
    if (x > 0) {
      this.swap(0, this.find(x - 1, y))
    }
  }

  swap(i, j) {
    let { x, y } = this.squares[i];
    this.squares[i].x = this.squares[j].x;
    this.squares[i].y = this.squares[j].y;
    this.squares[j].x = x;
    this.squares[j].y = y;
  }

  find(x, y) {
    for (let i in this.squares) {
      let square = this.squares[i];
      if (square.x === x && square.y === y) {
        return i;
      }
    }
    throw new Error('unexpected error');
  }

  checkSuccess() {
    this.success = this.squares.every(it => it.x === it.dx && it.y === it.dy);
  }

}

export { AppStore };