import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  grid-area: SB;
  width: 100%;
  max-width: 350px;
  height: 39px;
  margin: 7px 0px 10px 30px;
  background-color: var(--secondary);
  padding: 5px;
  border-radius: 20px;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  top: 0px;
  @media (max-width: 1300px){
    max-width: 300px;
  }
  @media (max-width: 1000px){
    display: none;
  }
  &.actived {
    background-color: var(--primary);
    border: solid 1px var(--twitter);
    & > div > div > svg {
      color: var(--twitter);
    }
    & > div > svg {
      display: inline;
    }
  }
  & > div:first-child {
    display: flex;
    width: 100%;
    align-items: center;
  }
  & > div > div > svg {
    color: var(--quinary);
    width: 40px;
    height: 18px;
  }
  & > div > svg {
    display: none;
    margin: 2px 5px 0px 0px;
    color: #000;
    width: 25px;
    height: 22.5px;
    border-radius: 50%;
    background-color: var(--twitter);
  }
`;

export const Input = styled.input`
  background-color: transparent;
  width: 100%;
  color: var(--white);
  font-size: 15px;
  margin: 5px 0px;
  padding-left: 5px;
  ::placeholder {
    opacity: 1;
    color: var(--quinary);
  }
`;
