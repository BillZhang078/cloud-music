import styled from 'styled-components';
import style from '../../assets/global-style';

export const Top = styled.div`
  display: flex;
  padding: 5px 0px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background: ${style['theme-color']};
  & > span {
    line-height: 40px;
    color: #f1f1f1;
    font-size: 20px;
    &.iconfont {
      font-size: 25px;
    }
  }
`;

export const Tab = styled.div`
  background: ${style['theme-color']};
  & ul.tab-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 55px;
    & a > span {
      line-height: 40px;
      font-size: 20px;
      color: #f1f1f1;
      &.selected {
        border-bottom: 3px solid;
        font-weight: 700;
        padding-bottom: 8px;
      }
    }
  }
`;
