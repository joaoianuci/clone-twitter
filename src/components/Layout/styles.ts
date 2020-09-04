import styled from 'styled-components';
import { fade } from '../../styles/animations';

// UN = USER NAVIGATION
// UI = USER INFO
// HI = HEADER INFO
// SB = SEARCH BAR
// TD = TWEET DATA
// WH = WHAT HAPPENING
// WF = WHO FOLLOW

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow-y: auto;
  width: 100%;
  height: 100vh;
  background-color: var(--primary);
  scrollbar-color: var(--tertiary) var(--secondary);
  scrollbar-width: thin;
  @media (min-width: 1301px) {
    justify-content: space-between;
  }
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
  @media (max-width: 1300px) {
    & {
      width: 80px;
      align-items: flex-end;
      justify-content: start;
    }
  }
  @media (max-width: 900px) {
    & {
      overflow: hidden;
      border-right: 0;
      border-top: solid 1px var(--tertiary);
      padding: 0px 5%;
      width: 100%;
      position: fixed;
      z-index: 3;
      bottom: 0;
      height: auto;
      align-items: center;
    }
  }
`;

export const Grid = styled.div`
  animation: ${fade} ease-in 0.2s;
  display: grid;
  height: 100vh;
  justify-content: center;
  grid-template-columns: 275px 598px 400px;
  grid-template-rows: 300px 100px 500px;
  grid-template-areas:
    'UN HI SB'
    'UN TD WH'
    'UI TD WF';
  position: relative;
  & > div:last-child {
    height: 100vh;
    & > div:last-child {
      margin-bottom: 10px;
    }
    & > div:first-child {
      width: 100%;
      height: 52px;
      position: fixed;
      top: 0px;
      background-color: var(--primary);
    }
    overflow-y: scroll;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
      scrollbar-width: 0;
      -ms-overflow-style: none;
    }
  }
  @media (max-width: 1300px) {
    grid-template-columns: 80px 598px 350px;
    & > div:last-child {
      max-width: 350px;
    }
  }
  @media (max-width: 1000px) {
    & {
      & > div:last-child {
        display: none;
      }
      grid-template-columns: 80px 598px;
      grid-template-areas:
        'UN HI'
        'UN TD'
        'UI TD';
    }
  }
  @media (max-width: 900px) {
    & > div:last-child {
      display: none;
      overflow: auto;
      scrollbar-color: var(--tertiary) var(--secondary);
      scrollbar-width: thin;
      @media (min-width: 1301px) {
        justify-content: space-between;
      }
      ::-webkit-scrollbar {
        width: 4px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
      }
      ::-webkit-scrollbar-track {
        background-color: var(--secondary);
      }
    }
    & {
      padding: 0;
      grid-template-columns: 100%;
      grid-template-areas:
        'HI HI HI'
        'TD TD TD'
        'UN UN UN';
    }
  }
`;
