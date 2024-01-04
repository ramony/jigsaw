import { useContext } from "react"
import { observer } from 'mobx-react';

import AppContext from '../store/appContext';

import '../style/Board.less';

const Board = observer(() => {

    const appStore = useContext(AppContext);

    return (
        <div className="Board">
            {
                appStore.squares.map((it, index) => {
                    return <div className={"Square Square-" + it.type}>
                        <div class="lt"></div>
                        <div></div>
                        <div></div>
                        <div class="rb"></div>
                    </div>
                })
            }
        </div>
    )

})

export default Board