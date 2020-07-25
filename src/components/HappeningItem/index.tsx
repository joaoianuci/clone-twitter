import React from "react";
import numeral from "numeral";
import "numeral/locales/pt-br";
import {
  Container,
  Main,
  Header,
  Category,
  Time,
  Body,
  Title,
  Footer,
  Tweets,
  Image,
} from "./styles";
export interface Props {
  category: string;
  title: string;
  time?: string;
  tweets?: number;
  image?: string;
}

const HappeningItem: React.FC<Props> = ({
  category,
  title,
  time,
  tweets,
  image,
}) => {
  numeral.locale("pt-br");
  return (
    <Container>
      <Main>
        <Header>
          <Category>{category}</Category>
          <span>·</span>
          <Time>{time}</Time>
        </Header>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Footer>
          {tweets !== undefined && tweets > 0 ? (
            <Tweets>{numeral(tweets).format("0,00 a")} Tweets</Tweets>
          ) : (
            <></>
          )}
        </Footer>
      </Main>
      {image !== undefined && image !== "" && image !== null ? (
        <Image
          category={category}
          title={title}
          time={time}
          tweets={tweets}
          image={image}
        />
      ) : (
        <></>
      )}
    </Container>
  );
};

export default HappeningItem;
