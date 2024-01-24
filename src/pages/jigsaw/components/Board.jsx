import { useContext } from "react"
import { observer } from 'mobx-react';

import AppContext from '@/store/appContext';
import Square from './Square';

import '@/styles/jigsaw/Board.less';

const Board = observer(() => {

    const appStore = useContext(AppContext);

    return (
        <div className="Board">
            {
                appStore.squares.map((it, index) => {
                    return <Square type={it.type}></Square>
                })
            }
        </div>
    )

})

export default Board