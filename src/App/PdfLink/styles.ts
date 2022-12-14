import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #e2e2e2;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    height: 100%;
    max-height: 350px;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  h4 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;

    background: #F3F3f3;
  }

  button {
    cursor: pointer;
    width: 100%;
    height: 40px;
    background: #7159c1;
    color: #fff;
    border: 0;
    border-radius: 5px;
    font-weight: bold;
    transition: background 0.2s;

    &:hover {
      background: #563d7c;
    }
  }

`;
