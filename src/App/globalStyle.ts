import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #e2e2e2;
    color: #312e38;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
  }
`;