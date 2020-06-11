import React from 'react';
import Slider from '../../components/slider'
function Rcommend(props) {

  const bannerList = [1, 2, 3, 4].map(item => {
    return {imageUrl:'https://images.unsplash.com/photo-1591624653534-5a9c93e4c5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'} 
  })
  return <div><Slider bannerList={bannerList}></Slider></div>;
}

export default React.memo(Rcommend);
