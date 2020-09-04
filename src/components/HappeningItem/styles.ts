import styled from 'styled-components';
import { Props } from '.';

export const Container = styled.div`
  display: flex;
  padding: 15px;
  width: 100%;
  border-bottom: solid 1px var(--tertiary);
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: var(--secondary-light);
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  margin-right: 10px;
`;

export const Header = styled.div`
  display: flex;
  color: var(--quinary);
  font-size: 13px;
  & > span:nth-child(2) {
    padding: 0px 5px;
    font-size: 16px;
  }
`;

export const Category = styled.span``;

export const Time = styled.span`
  max-width: 250px;
  @media (max-width: 1300px) {
    max-width: 200px;
  }
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Body = styled.div`
  font-weight: bold;
  padding: 2px 0px;
`;

export const Title = styled.strong`
  font-size: 15px;
  color: var(--white);
`;

export const Footer = styled.div``;

export const Tweets = styled.span`
  color: var(--quinary);
  font-size: 13px;
`;

export const Image = styled.div<Props>`
  width: 15%;
  height: 15%;
  min-width: calc(69px);
  max-width: calc(90px);
  min-height: calc(69px);
  background-image: url(${(props) => (props.image ? props.image : 'none')});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px;
`;
