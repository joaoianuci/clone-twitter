import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  grid-area: UI;
  width: 95%;
  height: max-content;
  margin: 5px 0px 8px 5px;
  padding: 10px;
  border-radius: 9999px;
  transition: background-color 0.2s;
  cursor: pointer;
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
  @media (max-width: 1300px) {
    &{
      width: max-content;
      border-radius: 50%;
      margin: 0px 0px 0px 3px;
      padding: 10px;
      justify-self: start;
      align-self: start;
    }
    & > div:not(:first-child) {
      display: none;
    }
  }
  @media (max-width: 900px){
    & {
      display: none;
    }
  }
`;

export const Name = styled.span`
  color: var(--white);
  font-size: 15px;
  font-weight: 700;
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  & > div > svg {
    width: 23px;
    height: 23px;
  }
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  color: var(--quinary);
  font-size: 15px;
  font-weight: 400;
`;
