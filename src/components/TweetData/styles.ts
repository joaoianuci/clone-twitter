import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: TD;
  width: 100%;
  max-width: 600px;
  margin: auto;
  height: 100vh;
  border-right: solid 1px var(--tertiary);
  border-left: solid 1px var(--tertiary);
  @media (max-width: 600px) {
    border: 0;
  }
  @media (max-width: 900px) {
    & > div:not(:last-child) {
      display: none;
    }
  }
  overflow-y: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
    scrollbar-width: 0;
    -ms-overflow-style: none;
  }
`;

export const Separator = styled.div`
  display: inline;
  min-height: 10px;
  background-color: var(--secondary);
`;

export const Tweets = styled.div`
  & > div:last-child {
    padding-bottom: 60px;
    @media (max-width: 1000px) {
      padding-bottom: 120px;
    }
  }
`;
