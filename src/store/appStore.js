import { makeAutoObservable, runInAction } from "mobx";
import { BoardMatrix, ShuffleStrong } from '../config/GameConfig';

class AppStore {

  squares = [];

  constructor() {
    makeAutoObservable(this);
    for (let i = 0; i < 300; i++) {
      this.squares.push(i % 2)
    }
  }

}

export { AppStore };