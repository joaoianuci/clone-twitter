import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  grid-area: WF;
  max-width: 350px;
  border-radius: 15px;
  flex-direction: column;
  background-color: var(--primary-light);
  margin: 17px 0px 0px 30px;

  @media (max-width: 1300px) {
    max-width: 300px;
  }
`;

export const Title = styled.strong`
  padding: 10px 15px;
  font-size: 20px;
  color: var(--white);
  border-bottom: solid 1px var(--tertiary);
`;
