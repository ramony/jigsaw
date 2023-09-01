import { makeAutoObservable, runInAction } from "mobx";
import { BoardMatrix, ShuffleStrong } from '../config/GameConfig';

class AppStore {

  squares = [];

  constructor() {
    makeAutoObservable(this);
    for (let i = 0; i < 117; i++) {
      this.squares.push(i % 10 == 0 ? 0 : 1)
    }
  }

}

export { AppStore };