import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: var(--secondary-light);
  }
`;

export const Link = styled.span`
  font-size: 15px;
  color: var(--link);
`;
