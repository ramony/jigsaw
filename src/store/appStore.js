import { makeAutoObservable, runInAction } from "mobx";
import { BoardMatrix, ShuffleStrong } from '../config/GameConfig';

class AppStore {

  squares = [];

  constructor() {
    makeAutoObservable(this);
    this.paint();
  }

  paint() {
    for (let i = 0; i < 99; i++) {
      let points = new Set([1, 2, 3, 4, 5, 6, 7, 13, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 31, 35, 36, 38, 40, 42, 44,
        54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 67, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 85, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,]);
      this.squares.push({
        i: i,
        type: points.has(i) ? 0 : 1
      })

    }
  }

  paint2() {
    let size = 8;
    for (let i = 0; i < 88; i++) {
      this.squares.push({
        i: i,
        type: i < size * size && (i % (size + 1) == 0 || i % (size - 1) == 0) ? 0 : 1
      })
    }
  }
}

export { AppStore };