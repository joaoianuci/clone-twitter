import styled from 'styled-components';
import { Props } from '.';

export const Container = styled.div<Props>`
  display: ${(props) => (props.itemName === 'Procurar' ? 'none' : 'flex')};
  transition: background-color 0.2s;
  width: max-content;
  align-items: center;
  padding: 7px 4px;
  margin-top: 7px;
  border-radius: 9999px;
  cursor: pointer;
  & > span {
    margin-left: 10px;
  }
  @media (max-width: 1300px) {
    & {
      border-radius: 50%;
    }
    & > span {
      display: none;
    }
  }
  @media (max-width: 900px) {
    & {
      margin-top: 0px;
      display: ${(props) =>
        props.essential && !(props.itemName === 'Itens salvos')
          ? 'flex'
          : 'none'};
      svg {
        color: var(--quinary);
      }
    }
  }
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
    & > span,
    svg {
      color: var(--twitter);
    }
  }
`;
