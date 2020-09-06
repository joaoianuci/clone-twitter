import styled from 'styled-components';

export const Container = styled.div`
  transition: background-color 0.2s ease-in;
  display: flex;
  padding: 10px 15px;
  width: 100%;
  border-bottom: solid 1px var(--tertiary);
  & > div:first-child {
    width: 49px;
    height: 49px;
    margin-right: 10px;
  }
  &:hover {
    background-color: var(--primary-light);
  }
`;

export const TweetInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-area: TI;
`;

export const UserData = styled.div`
  display: flex;
  width: 100%;
  > div:first-child {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    min-width: 30px;
    max-width: 120px;
  }
  > span {
    margin-left: 5px;
    color: var(--quinary);
    white-space: nowrap;

    > span {
      display: inline-block;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    > span:first-child {
      min-width: 50px;
      max-width: 100px;
    }
  }
`;

export const Name = styled.div`
  font-size: 17px;
  color: var(--white);
  font-weight: bold;
`;

export const Content = styled.div`
  width: calc(100% - 29px);
  margin: 5px 0px;
  color: var(--white);
`;

export const Retweet = styled.div`
  display: flex;
  width: 100%;
  margin-top: 5px;
  border: solid 1px var(--tertiary);
  border-radius: 20px;
  & > div > div:nth-child(2) > div:nth-child(1) {
    float: right;
  }
  & > div {
    width: 100%;
    transition: background-color 0.2s ease-in;
    border-radius: 20px;
    &:hover {
      background-color: var(--secondary-light);
    }
    display: grid;
    border: 0;
    justify-content: start;
    grid-template-areas:
      'HU' 'HU'
      'TI' 'TI';
  }
  & > div > div:nth-child(1) {
    width: 20px;
    height: 20px;
  }
  & > div > div:nth-child(2) {
    grid-row-start: 1;
    grid-row-end: 1;
    grid-column-start: 2;
    grid-column-end: 2;
    max-width: calc(100% - 20px);
  }
  & > div > div:nth-child(2) > div:nth-child(2) {
    margin-left: -30px;
  }
  & > div > div:nth-child(2) > div:nth-child(3) {
    display: none;
  }

  & > div > div:nth-child(2) > div:nth-child(1) > span {
    @media (max-width: 575px) {
      & > span {
        max-width: 100px;
      }
    }
  }
`;

export const Interactions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  margin-left: -10px;
  justify-content: flex-start;
`;

export const InteractionItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: min-content;
  & > div:first-child {
    &:not(:hover) {
      color: var(--senary);
    }
    & > svg {
      width: 19px;
      height: 19px;
    }
  }

  & > :last-child {
    color: var(--senary);
    font-size: 14px;
  }
`;
