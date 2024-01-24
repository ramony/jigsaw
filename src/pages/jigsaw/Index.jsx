import { observer } from 'mobx-react';

import '@/styles/jigsaw/Index.less';
import Board from './components/Board';

const Jigsaw = observer(() => {
  return (
    <div className="Jigsaw">
      <Board />
    </div>
  );
});

export default Jigsaw;
