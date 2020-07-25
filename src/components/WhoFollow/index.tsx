import React from "react";
import { Container, Title } from "./styles";
import ShowMore from "../ShowMore";
import FollowItem from "../FollowItem";

const WhoFollow: React.FC = () => {
  return (
    <Container>
      <Title>Quem seguir</Title>
      <FollowItem name="grid (grid é bom dms)" username="@grid" />
      <FollowItem name="CSS" username="@css" />
      <FollowItem name="ReactJS" username="@reactjs" />
      <ShowMore />
    </Container>
  );
};

export default WhoFollow;
