import styled from "styled-components";

export const Container = styled.div`
  transition: background-color 0.2s ease-in;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid var(--tertiary);
  &:hover {
    background-color: var(--secondary-light);
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  & > div:first-child {
    width: 49px;
    height: 49px;
    margin-right: 10px;
  }
`;

export const UserData = styled.div`
  display: flex;
  width: 100%;
  max-width: 200px;
  flex-direction: column;
  @media (max-width: 1300px){
    max-width: 120px;
  }
`;

export const Name = styled.span`
  font-size: 17px;
  color: var(--white);
  font-weight: bold;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Username = styled.span`
  color: var(--quinary);
  font-size: 15px;
  font-weight: 400;
`;

export const FollowButton = styled.button`
  transition: background-color 0.2s ease-in;
  width: 78px;
  height: 30px;
  border-radius: 9999px;
  color: var(--twitter);
  font-weight: bold;
  font-size: 15px;
  background-color: var(--primary-light);
  border: 1px solid var(--twitter);
  cursor: pointer;
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`;
