import { useState, useContext } from "react"
import { observer } from 'mobx-react';

import AppContext from '../store/appContext';
import '../style/Board.less';

const Board = observer(() => {

    const appStore = useContext(AppContext);

    return (
        <div className="Board">
            <div className="Result">{appStore.success ? 'Success' : 'In Progress'}</div>
            {
                appStore.squares.map((it, index) => {
                    let pos = it.y + '-' + (1 + appStore.m) + '-' + it.x + '-' + appStore.n;
                    let bgPos = it.dy + '-' + (1 + appStore.m) + '-' + it.dx + '-' + appStore.n;
                    //console.log(pos)
                    if (index === 0) {
                        return <div className={"Square Square-" + bgPos}></div>
                    } else {
                        return [<div className={"Square Square-" + bgPos}></div>,
                        <div key={it.key} className={"Square Square-Animate Square-Front Square-" + pos}>{it.value}</div>]
                    }
                })
            }
        </div>
    )

})

export default Board