import styled from 'styled-components';
import style from '../../assets/global-style';
export const Slidercontainer = styled.div`
  position: relative;
  box-sizing:border-box;
  width:100%;
  height:100%;
  margin:auto;
  background:white;
  .before {
      poistion:absolute;
      top:0;,
      height:60%;
      width:100%;
      background:${style['theme-color']}
  }
  .swiper-container {
    position:relative;
    width: 98%;
    height: 300px;
    overflow:hidden;
    margin:auto;
    border-radius:6px;
    .slider-nav{
        position:absolute;
        display:block;
        width:100%;
        height:100%;
        
    }
    .swiper-paination-bullet-active {
        background:${style['theme-color']}
    }
  }

  

`;
