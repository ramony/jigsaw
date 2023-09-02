import { makeAutoObservable, runInAction } from "mobx";
import { BoardMatrix, ShuffleStrong } from '../config/GameConfig';

class AppStore {

  squares = [];

  constructor() {
    makeAutoObservable(this);
    this.paint();
  }

  paint() {
    for (let i = 0; i < 99 + 9; i++) {
      let points = new Set([1, 2, 3, 4, 5, 6, 7, 13, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 31, 35, 36, 38, 40, 42, 44, 45, 47, 49, 51, 53,
        63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 76, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 94, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107,]);
      this.squares.push({
        i: i,
        type: points.has(i - 0) ? 0 : 1
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