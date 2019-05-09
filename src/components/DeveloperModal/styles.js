import styled from 'styled-components';

export const Form = styled.form`
  padding: 10px;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  /*align-items: center;*/

  strong {
    align-self: center;
  }

  input {
    flex: 1;
    height: 35px;
    padding: 0 20px;
    background-color: #ffffff;
    font-size: 14px;
    color: #444;
    line-height: 8px;
    border-radius: 3px;
    border: 1px solid #f0f0f0;
    margin-top: 15px;
  }

  button {
    height: 30px;
    padding: 0 20px;
    margin-left: 10px;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    font-size: 10px;
    flex: 1;
    cursor: pointer;
  }
`;

export const Cancel = styled.button`
  background: #dc3545;
  color: #fff;

  &:hover {
    background: #bd2130;
  }
`;

export const Success = styled.button`
  background: #28a745;
  color: #fff;

  &:hover {
    background: #1e7e34;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  flex: 1;
  button:first-child {
    margin-left: 0;
  }
`;
