import React, {useState} from 'react';
import {Top, Tab} from './style';
import {Link} from 'react-router-dom';
function Home(props) {
  const [selected, setSelected] = useState('recommend');
  const onHandelSelected = target => {
    setSelected(target);
  };
  console.log(selected);
  return (
    <div>
      <Top>
        <span className='iconfont menu'>&#xe65c;</span>
        <span className='title'>Cloud Music</span>
        <span className='iconfont menu'>&#xe62b;</span>
      </Top>
      <Tab>
        <ul className='tab-list'>
          <Link to='/recommend'>
            <span
              className={
                selected === 'recommend' ? 'recommend selected' : 'recommend'
              }
              onClick={e => onHandelSelected('recommend')}>
              Recommend
            </span>
          </Link>
          <Link to='/singers'>
            <span
              className={
                selected === 'singers' ? 'singers selected' : 'singers'
              }
              onClick={e => onHandelSelected('singers')}>
              Singers
            </span>
          </Link>
          <Link to='/rank'>
            <span
              className={selected === 'rank' ? 'rank selected' : 'rank'}
              onClick={e => onHandelSelected('rank')}>
              Global Rank
            </span>
          </Link>
        </ul>
      </Tab>
    </div>
  );
}

export default React.memo(Home);
