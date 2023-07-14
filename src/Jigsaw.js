import { useState, useEffect } from "react"

import './Jigsaw.css';
import Board from './domain/Board';
import { moveUp, moveDown, moveLeft, moveRight, checkSuccess } from './domain/Board';

function Jigsaw() {

  const [board, setBoard] = useState(new Board(3));

  function keyDown(e) {
    if (board.success) {
      return;
    }
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
    let success = checkSuccess(board);
    if (success) {
      board.success = success;
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
        <div className="Result">
          Result: {board.success ? 'Success' : 'In Progress'}
        </div>
        {
          board.matrix.map(it => {
            if (it.val === 0) {
              return <div className="piece" style={{ left: it.pos.left, top: it.pos.top }}></div>
            } else {
              return <div className="piece piece-ani" style={{ left: it.pos.left, top: it.pos.top }}>{it.val}</div>
            }
          })
        }
      </div>
    </div>
  );
}

export default Jigsaw;
