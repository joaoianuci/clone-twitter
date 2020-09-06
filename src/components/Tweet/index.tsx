import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import {
  Container,
  TweetInfo,
  UserData,
  Name,
  Content,
  Interactions,
  InteractionItem,
  Retweet,
} from './styles';
import { UserIcon } from '../../styles/GlobalStyles';
import Icon from '../Icon';
import {
  AiOutlineRetweet,
  AiOutlineUpload,
  AiOutlineHeart,
  AiOutlineComment,
} from 'react-icons/ai';

export interface Props {
  date: Date;
  content: React.ReactElement | React.ReactNode | string;
  user: {
    name: string;
    username: string;
  };
  interactions: {
    likes: number;
    retweets: number;
    replies: number;
  };
  retweetMessage?: string;
}

const Tweet: React.FC<Props> = ({
  date,
  content,
  user,
  interactions,
  retweetMessage,
}) => {
  moment.locale('pt-br');
  const [timePost, setTimePost] = useState(moment(date).fromNow());
  const contentIsTweet = React.isValidElement(content);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimePost(moment(date).fromNow());
    }, 60000);
    return () => clearInterval(interval);
  }, [date]);
  return (
    <Container>
      <UserIcon />
      <TweetInfo>
        <UserData>
          <Name>{user.name}</Name>
          <span>
            <span>{user.username}</span>
            <span> · {timePost}</span>
          </span>
        </UserData>
        <Content>
          {contentIsTweet ? (
            <>
              <span>{retweetMessage}</span>
              <Retweet>{content}</Retweet>
            </>
          ) : (
            <span>{content}</span>
          )}
        </Content>
        <Interactions>
          <InteractionItem>
            <Icon
              hover
              textHover={'var(--twitter)'}
              icon={<AiOutlineComment />}
            />
            {interactions.replies > 0 ? (
              <span>{interactions.replies}</span>
            ) : (
              <span></span>
            )}
          </InteractionItem>
          <InteractionItem>
            <Icon
              hover
              backgroundHover={'rgba(22, 182, 95, 0.1)'}
              textHover={'rgba(22, 182, 95, 1)'}
              icon={<AiOutlineRetweet />}
            />
            {interactions.retweets > 0 ? (
              <span>{interactions.retweets}</span>
            ) : (
              <span></span>
            )}
          </InteractionItem>
          <InteractionItem>
            <Icon
              hover
              backgroundHover={'rgb(224, 36, 94, 0.1)'}
              textHover={'rgb(224, 36, 94)'}
              icon={<AiOutlineHeart />}
            />
            {interactions.likes > 0 ? (
              <span>{interactions.likes}</span>
            ) : (
              <span></span>
            )}
          </InteractionItem>
          <InteractionItem>
            <Icon
              hover
              textHover={'var(--twitter)'}
              icon={<AiOutlineUpload />}
            />
            <span></span>
          </InteractionItem>
        </Interactions>
      </TweetInfo>
    </Container>
  );
};

export default Tweet;
