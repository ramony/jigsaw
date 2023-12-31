import { useContext, useEffect } from "react"
import { observer } from 'mobx-react';
import AppContext from './store/appContext'

import './style/Jigsaw.css';
import Board from './components/Board';
import Control from './components/Control';

const Jigsaw = observer(() => {

  const appStore = useContext(AppContext);

  function keyDown(e) {
    if (appStore.success) {
      return;
    }
    if (!appStore.started) {
      return;
    }
    switch (e.keyCode) {
      case 39:
        appStore.moveRight();
        break;
      case 40:
        appStore.moveDown();
        break;
      case 37:
        appStore.moveLeft();
        break;
      case 38:
        appStore.moveUp();
        break;
    }
    appStore.checkSuccess();
  }

  useEffect(() => {
    window.addEventListener('keydown', keyDown); // 添加全局事件
    return () => {
      window.removeEventListener('keydown', keyDown); // 销毁
    };
  }, []);

  return (
    <div className="Jigsaw">
      {/* <div className="Result">
          Result: {appStore.success ? 'Success' : 'In Progress'}
        </div> */}
      <Board />
      {/* <Control /> */}
    </div>
  );
});

export default Jigsaw;
