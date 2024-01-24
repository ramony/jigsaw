import { makeAutoObservable } from "mobx";

const POINTS = [
  0, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 1, 0, 0, 0, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 1, 0, 0, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0, 1,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 1, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 1, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1
];

class AppStore {

  squares = [];

  constructor() {
    makeAutoObservable(this);
    this.paint();
  }

  paint() {

    for (let i = 0; i < 99 + 9; i++) {
      let type = POINTS[i] ? 1 : 1;
      this.squares.push({ i, type })
    }
  }

}

export { AppStore };