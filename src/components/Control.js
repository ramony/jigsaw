import { useState, useContext } from "react"
import { observer } from 'mobx-react';

import AppContext from '../store/appContext';
import '../style/Control.less';

const Control = observer(() => {

    const appStore = useContext(AppContext);

    return (
        <div className="Control">
            <input type="button" value="Start" onClick={appStore.start}></input>
        </div>
    )

})

export default Control