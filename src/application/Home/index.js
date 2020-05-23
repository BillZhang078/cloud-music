import React from 'react';
import {Top, Tab} from './style';
import {Link} from 'react-router-dom';
function Home(props) {
  return (
    <div>
      <Top>
        <span className='iconfont menu'>&#xe65c;</span>
        <span className='title'>Web App</span>
        <span className='iconfont menu'>&#xe62b;</span>
      </Top>
      <Tab>
        <ul className='tab-list'>
          <Link to='/recommend'>
            <span className='selected'>Recommend</span>
          </Link>
          <Link to='/singers'>
            <span>Singers</span>
          </Link>
          <Link to='/rank'>
            <span>Global Rank</span>
          </Link>
        </ul>
      </Tab>
    </div>
  );
}

export default React.memo(Home);
