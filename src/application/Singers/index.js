import React from 'react';
import {Link} from 'react-router-dom';
function Singers(props) {
  return (
    <div>
      <Link>
        <p>Singers</p>
      </Link>
    </div>
  );
}

export default React.memo(Singers);
