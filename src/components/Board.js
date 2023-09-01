import { useState, useContext } from "react"
import { observer } from 'mobx-react';

import AppContext from '../store/appContext';

import '../style/Board.less';

const Board = observer(() => {

    const appStore = useContext(AppContext);

    return (
        <div className="Board">
            <div className="title">快   乐   学   习</div>
            {
                appStore.squares.map((it, index) => {
                    return <div className={"Square Square-" + it}></div>
                })
            }
        </div>
    )

})

export default Board