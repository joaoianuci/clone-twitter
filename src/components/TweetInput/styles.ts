import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 15px 0px 15px;
  & > div:first-child {
    margin-right: 10px;
    width: 49px;
    height: 49px;
    transition: filter 0.2s ease-in;
    :hover {
      filter: brightness(0.9);
    }
  }
`;

export const InputData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0px;
  height: 100%;
`;

export const Input = styled.input`
  background-color: transparent;
  color: var(--white);
  font-size: 19px;
  margin: 5px 0px;
  &:focus {
    ::placeholder {
      opacity: 1;
      color: var(--gray);
    }
  }
  ::placeholder {
    opacity: 1;
    color: var(--senary);
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  width: 100%;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: -10px;
  & > div > svg {
    color: var(--twitter);
  }
  & > div > svg {
    width: 22px;
    height: 22px;
  }
`;

export const TweetButton = styled.button`
  width: 95px;
  background-color: var(--twitter);
  color: var(--white);
  font-size: 17px;
  font-weight: bold;
  height: 40px;
  border-radius: 9999px;
  cursor: pointer;
  :disabled {
    filter: brightness(0.7);
  }
`;
