import styled, { createGlobalStyle } from 'styled-components';

export const UserIcon = styled.div`
  width: 39px;
  height: 39px;
  border-radius: 50%;
  background-color: var(--symbol);
  flex-shrink: 0;
`;

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 

    html, body, #root {
        height: 100%;
    }
    *, button, input{
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }
    body {
        background-color: var(--primary);
        overflow: hidden;
        box-sizing: border-box;
    }
    :root {
        --primary: #15202B;
        --primary-light: #192734; 
        --secondary: #253341;
        --secondary-light: #202E3A;
        --tertiary: #38444D;
        --quaternary: #292b2f;
        --quinary: #8899A6;
        --senary: #9197A3;

        --white: #fff;
        --gray: #BDC1C9;
        --chat-input: rgb(64,68,75);
        --symbol: #74777a;
        --heart: #E0245E;
        --retweet: #17BF63;

        --twitter: #1DA1F2;
     
        --link: #1E96F2;
     
      }
`;
