import { observer } from 'mobx-react';

import '../style/Jigsaw.css';
import Board from './Board';

const Jigsaw = observer(() => {
  return (
    <div className="Jigsaw">
      <Board />
    </div>
  );
});

export default Jigsaw;