import React from 'react';
import {
  Container,
  InputData,
  Input,
  Footer,
  Icons,
  TweetButton,
} from './styles';
import { UserIcon } from '../../styles/GlobalStyles';
import {
  FiImage,
  AiOutlineFileGif,
  TiChartBar,
  IoMdHappy,
  FaCalendarAlt,
} from 'react-icons/all';

import Icon from '../Icon';

const TweetInput: React.FC = () => {
  return (
    <Container>
      <UserIcon />
      <InputData>
        <Input placeholder="O que está acontecendo?" type="text" />
        <Footer>
          <Icons>
            <Icon hover icon={<FiImage />} />
            <Icon hover icon={<AiOutlineFileGif />} />
            <Icon hover icon={<TiChartBar />} />
            <Icon hover icon={<IoMdHappy />} />
            <Icon hover icon={<FaCalendarAlt />} />
          </Icons>
          <TweetButton disabled>Tweetar</TweetButton>
        </Footer>
      </InputData>
    </Container>
  );
};

export default TweetInput;
