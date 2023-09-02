import { makeAutoObservable, runInAction } from "mobx";
import { BoardMatrix, ShuffleStrong } from '../config/GameConfig';

class AppStore {

  squares = [];

  constructor() {
    makeAutoObservable(this);
    let size = 8;
    for (let i = 0; i < 88; i++) {
      this.squares.push(i < size * size && (i % (size + 1) == 0 || i % (size - 1) == 0) ? 0 : 1)
    }
  }

}

export { AppStore };