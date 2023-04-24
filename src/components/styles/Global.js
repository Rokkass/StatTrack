import { createGlobalStyle } from "styled-components";
import "../../fonts/font.css";

const GlobalStyles = createGlobalStyle`
  :root {
    font-family: 'Regular', sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  *{
  	margin: 0;
  	padding: 0;
  	box-sizing: border-box;
  }
  html {
     scroll-behavior: smooth;
   }
  
  body{
	background: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.dark};
  }
  .app{
    display: flex;
    flex-direction: column;
    align-items: center;
	padding: 0 140px;
  }

  h1 {
    font-size: 70px;
    line-height: 67px;
    letter-spacing: -4px;
	margin-bottom: 20px;
  }

  h2 {
    font-size: 60px;
    line-height: 56px;
    letter-spacing: -4px;
  }

  h3 {
    font-weight: 400;
    font-size: 28px;
    line-height: 27px;
    letter-spacing: -1.4px;
	margin-bottom: 20px;
  }

  ::placeholder {
    color: #151515;
	font-size: 18px;
	line-height: 18px;
  }
  
  @media (max-width: 1440px){
    .app{
      padding: 0 80px;
    }
  }
  @media (max-width: 1024px){
    .app{
      padding: 0 32px;
    }
    h1{
      font-size: 50px;
      line-height: 47px;
    }
  }
  @media (max-width: 800px){
    h1{
      font-size: 40px;
      line-height: 37px;
    }
  }
  @media (max-width: 360px){
    .app{
      padding: 0 20px;
    }
  }
`;

export default GlobalStyles;
