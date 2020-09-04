import styled from 'styled-components';
import { fade } from '../../styles/animations';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--primary);
  grid-area: UN;
  flex-shrink: 0;
  margin-bottom: 5px;
  width: 100%;
  justify-content: center;
  padding: 0px 10px;
  @media (max-width: 1300px) {
    animation: ${fade} ease-in 0.2s;
  }
  @media (max-width: 900px) {
    padding: 0px;
    margin-top: 5px;
    animation: ${fade} ease-in 0.2s;
    flex-direction: row;
    justify-content: space-evenly;
  }
  @media (max-width: 700px) {
    justify-content: space-between;
  }
`;

export const TweetButton = styled.button`
  width: 90%;
  background-color: var(--twitter);
  color: var(--white);
  font-size: 15px;
  font-weight: bold;
  height: 50px;
  margin: 15px 0px;
  border-radius: 9999px;
  cursor: pointer;
  &:hover {
    filter: brightness(90%);
    transition-duration: 0.2s;
  }
  @media (max-width: 900px) {
    width: 59px;
    height: 59px;
    position: fixed;
    right: 20px;
    bottom: calc(20px + 50px);
    z-index: 4;
    & > div > span {
      display: none;
    }
    -webkit-box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.2);
    -moz-box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.2);
  }
  @media (min-width: 901px) and (max-width: 909px) {
    display: flex;
    width: 120px;

    & > div > span {
      display: inline;
    }
  }
  @media (min-width: 910px) and (max-width: 1300px) {
    width: 47px;
    height: 47px;
    border-radius: 50%;
    & > div > span {
      display: none;
    }
    margin: 10px 0px 5px 0px;
    & > div {
      display: initial;
      margin: auto;
      width: 22.5px;
      height: 22.5px;
      color: var(--white);
    }
  }
  @media (min-width: 1299px) {
    & div > div > svg {
      display: none;
    }
  }
`;
