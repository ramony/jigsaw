import { observer } from 'mobx-react';

import '../style/Square.less';

const Square = observer((props) => {

    return (
        <div className={"Square Square-" + props.type}>
            <div class="lt"></div>
            <div></div>
            <div></div>
            <div class="rb"></div>
        </div>
    )

})

export default Square