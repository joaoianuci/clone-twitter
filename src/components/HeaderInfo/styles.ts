import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0;
  border: solid 1px var(--tertiary);
  height: 53px;
  padding: 0px 15px;
  grid-area: HI;
  z-index: 3;
  @media (max-width: 900px) {
    & > div:first-child > div:first-child {
      width: 30px;
      height: 30px;
    }
    & {
      justify-content: space-around;
      border: 0;
      border-bottom: solid 1px var(--tertiary);
    }
  }
  @media (max-width: 700px) {
    & {
      justify-content: space-between;
    }
  }
  & > div:last-child {
    padding: 5px 5px 0px 5px;
    & > svg {
      color: var(--twitter);
      width: 30px;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  & > div:first-child {
    display: none;
    cursor: pointer;
  }
  @media (max-width: 900px) {
    & > div:first-child {
      display: flex;
      margin-right: 20px;
    }
  }
`;

export const PageName = styled.span`
  font-size: 19px;
  color: var(--white);
  font-weight: 900;
`;
