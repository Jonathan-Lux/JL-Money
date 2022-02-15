import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  button{ cursor:pointer;}
  
  body{
    background-color:white;
  }
  
  :root {
    --background: #e5e5e5;
    --red: #e62e4d;
    --blue: #5429cc;
    --green: #33cc95;
    --title: #363f5f;
    --text: #969cb3;
    --blueLight: #6933ff;
  }
  
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
  
    @media (max-width: 720px;) {
      font-size: 87.5%;
    }
  }

  .react-modal-overlay{
    position:fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background:rgba(0, 0, 0,0.5);
    display: flex;
    justify-content:center;
    align-items:center;
  
  }
  
  .react-modal-content {
   border-radius: 0.3rem;
   max-width:576px;
   width: 100%;
   background-color:#F0F2F5;
   padding: 3rem;
   position: relative;
}

.closed-modal{
   position: absolute;
    background: transparent;
    border:none;
    top: 1rem;
    right: 1rem;
} 

`;
