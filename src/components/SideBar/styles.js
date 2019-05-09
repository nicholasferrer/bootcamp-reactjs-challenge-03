import styled from 'styled-components';

export const Page = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Container = styled.div`
  height: 100%;
  padding: 5px 15px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  flex: 1;
  display: flex;
  flex-direction: column;
  div:last-child {
    border: none;
  }
`;

export const Item = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid #eee;
  flex-direction: row;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 50px;
  img {
    width: 42px;
    border-radius: 50%;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  strong {
    font-size: 12px;
    line-height: 9px;
  }
  small {
    font-size: 10px;
    color: #999;
    line-height: 9px;
  }
  div {
    line-height: 12px;
  }
`;

export const Actions = styled.div`
  width: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

export const Remove = styled.button`
  width: 15px;
  height: 15px;
  border: none;
  border-radius: 50%;
  background-color: #bb0000;
  display: flex;
  justify-content: center;
  line-height: 12px;
  cursor: pointer;
  i {
    color: #fff;
    /*font-size: 12px;*/
  }
  &:hover {
    background: #ff0000;
  }
`;

export const Link = styled.a`
  line-height: 12px;
  width: 15px;
  height: 15px;
  border: none;
  border-radius: 50%;
  background-color: #fff;
  text-decoration: none;
  i {
    color: #aaa;
  }
  &:hover {
    background-color: #f5f5f5;
  }
`;
