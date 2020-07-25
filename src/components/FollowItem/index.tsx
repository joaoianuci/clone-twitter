import React from "react";
import {
  Container,
  User,
  UserData,
  Name,
  Username,
  FollowButton,
} from "./styles";
import { UserIcon } from "../../styles/GlobalStyles";

export interface Props {
  name: string;
  username: string;
}

const FollowItem: React.FC<Props> = ({ name, username }) => {
  return (
    <Container>
      <User>
        <UserIcon />
        <UserData>
          <Name>{name}</Name>
          <Username>{username}</Username>
        </UserData>
      </User>
      <FollowButton>Seguir</FollowButton>
    </Container>
  );
};

export default FollowItem;
