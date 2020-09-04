import React from 'react';

import { Container, Separator, Tweets } from './styles';
import TweetInput from '../TweetInput';
import Tweet from '../Tweet';

const TweetData: React.FC = () => {
  return (
    <Container>
      <TweetInput />
      <Separator />
      <Tweets>
        <Tweet
          date={new Date()}
          content={
            'Eu adoro flex-layouts, isto é muito bom...É incrível como posso criar qualquer coisa, através do flex-layout abri portas para um novo mundo de oportunides.'
          }
          user={{ name: 'flex', username: '@layout' }}
          interactions={{ likes: 1000, retweets: 30, replies: 19 }}
        />
        <Tweet
          date={new Date()}
          retweetMessage={'Tbm amo <3'}
          content={
            <Tweet
              date={new Date()}
              content={'Amo flex e grid layouts!'}
              user={{ name: 'flex', username: '@layout' }}
              interactions={{ likes: 0, retweets: 3, replies: 1 }}
            />
          }
          user={{ name: 'flex', username: '@layout' }}
          interactions={{ likes: 0, retweets: 3, replies: 1 }}
        />
        <Tweet
          date={new Date()}
          content={'Eu adoro flex-layouts, isto é muito bom'}
          user={{ name: 'flex', username: '@layout' }}
          interactions={{ likes: 0, retweets: 3, replies: 1 }}
        />
        <Tweet
          date={new Date()}
          content={'Eu adoro flex-layouts, isto é muito bom'}
          user={{ name: 'flex', username: '@layout' }}
          interactions={{ likes: 2, retweets: 3, replies: 1 }}
        />
        <Tweet
          date={new Date()}
          content={'Eu adoro flex-layouts, isto é muito bom'}
          user={{ name: 'flex', username: '@layout' }}
          interactions={{ likes: 1000, retweets: 30, replies: 19 }}
        />
      </Tweets>
    </Container>
  );
};

export default TweetData;
