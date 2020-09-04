import styled, { css } from 'styled-components';
import { Props } from '.';

export const Container = styled.div<Props>`
  color: var(--white);
  & > svg {
    width: 40px;
    height: 29px;
  }
  &:hover {
    color: ${(props) => (props.textHover ? props.textHover : 'var(--white)')};
  }
  ${(props) =>
    props.hover &&
    css`
      & {
        transition: background-color 0.2s ease-in;
        justify-content: center;
        padding: 8px 8px 5px 8px;
        border-radius: 50%;
      }
      &:hover + span {
        color: ${props.textHover ? props.textHover : 'var(--twitter)'};
      }
      &:hover {
        background-color: ${props.backgroundHover
          ? props.backgroundHover
          : 'rgba(29, 161, 242, 0.1)'};
      }
    `}
`;
