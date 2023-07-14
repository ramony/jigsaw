import { useState, useEffect } from "react"

import './Jigsaw.css';
import Board from './domain/Board';
import { moveUp, moveDown, moveLeft, moveRight } from './domain/Board';

function Jigsaw() {

  const [board, setBoard] = useState(new Board(3));

  function keyDown(e) {
    switch (e.keyCode) {
      case 39:
        moveRight(board);
        break;
      case 40:
        moveDown(board);
        break;
      case 37:
        moveLeft(board);
        break;
      case 38:
        moveUp(board);
        console.log(board)
        break;
    }
    setBoard({ ...board });
  }

  useEffect(() => {
    window.addEventListener('keydown', keyDown); // 添加全局事件
    return () => {
      window.removeEventListener('keydown', keyDown); // 销毁
    };
  }, []);

  return (
    <div className="Jigsaw">
      <div className="Board">
        {
          board.matrix.map(it => {
            return <div className="piece" style={{ left: it.pos.left, top: it.pos.top }}>{it.val}</div>
          })
        }
      </div>
    </div>
  );
}

export default Jigsaw;
