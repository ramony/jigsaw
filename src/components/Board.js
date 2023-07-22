import { useState, useContext } from "react"
import { observer } from 'mobx-react';

import AppContext from '../store/appContext';
import '../style/Board.css';

const Board = observer(() => {

    const appStore = useContext(AppContext);

    return (
        <div className="Board">
            {
                appStore.squares.map((it, index) => {
                    let position = it.y + '-' + it.x;
                    console.log(position)
                    if (index === 0) {
                        return <div className="square square-{position}"></div>
                    } else {
                        return <div className="square square-animate square-{position}">{position}</div>
                    }
                })
            }
        </div>
    )

})

export default Board