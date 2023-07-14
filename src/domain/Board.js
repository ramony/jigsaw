const POS = {
    RIGHT: 1,
    DOWN: 1 << 1,
    LEFT: 1 << 2,
    UP: 1 << 3
}

class Board {

    constructor(size) {
        this.size = size;
        this.matrix = [];
        for (let i = 0; i < size * size + 1; i++) {
            let pos = this.calc(size, i);
            this.matrix.push({ val: i, pos: pos });
        }
    }

    calc(size, i) {
        let x = (i - 1 + size) % size + 1;
        let y = Math.ceil(i / size) + 1;
        return {
            index: i, left: (x * 160) + "px", top: (y * 160) + "px"
        };
    }

}

// let shuffle = (board) => {
//     // this.move(POS.UP);
//     // this.move(POS.RIGHT);
//     // console.log(this.matrix)
// }

let moveUp = (board) => {
    move(board, POS.UP);
}

let moveDown = (board) => {
    move(board, POS.DOWN);
}

let moveLeft = (board) => {
    move(board, POS.LEFT);
}

let moveRight = (board) => {
    move(board, POS.RIGHT);
}

let move = (board, action) => {
    let size = board.size;
    let index = board.matrix[0].pos.index;
    if (action === POS.RIGHT) {
        if (index !== 0 && index % size !== 1) {
            swap(board, 0, getValByPos(board, index - 1));
        }
    }
    else if (action === POS.DOWN) {
        if (index >= size) {
            swap(board, 0, getValByPos(board, index - size));
        }
    }
    else if (action === POS.LEFT) {
        if (index % size !== 0) {
            swap(board, 0, getValByPos(board, index + 1));
        }
    }
    else if (action === POS.UP) {
        if (index <= size * (size - 1)) {
            swap(board, 0, getValByPos(board, index + size));
        }
    }
}
let swap = (board, i, j) => {
    let matrix = board.matrix;
    let tempPos = matrix[i].pos;
    matrix[i].pos = matrix[j].pos;
    matrix[j].pos = tempPos;
}

let getValByPos = (board, pos) => {
    for (let it of board.matrix) {
        if (it.pos.index === pos) {
            return it.val;
        }
    }
    throw new Error('unexpected error');
}

export default Board;
export { moveUp, moveDown, moveLeft, moveRight }