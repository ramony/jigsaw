import { observer } from 'mobx-react';

import '@/styles/jigsaw/Square.less';

const Square = observer((props) => {

    return (
        <div className={"Square Square-" + props.type}>
            <div className={"lt"}></div>
            <div></div>
            <div></div>
            <div className={"rb"}></div>
        </div>
    )

})

export default Square