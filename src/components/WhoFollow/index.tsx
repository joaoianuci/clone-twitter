import React, { useEffect, useState } from 'react';
import { Container, Title } from './styles';
import ShowMore from '../ShowMore';
import FollowItem from '../FollowItem';
import LoadingSpinner from '../LoadingSpinner';

const WhoFollow: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 250);
  }, []);
  return (
    <Container>
      {isLoading ? (
        <LoadingSpinner size={30} color={'#1DA1F2'} loading={isLoading} />
      ) : (
        <>
          <Title>Quem seguir</Title>
          <FollowItem name="grid (grid é bom dms)" username="@grid" />
          <FollowItem name="CSS" username="@css" />
          <FollowItem name="ReactJS" username="@reactjs" />
          <ShowMore />
        </>
      )}
    </Container>
  );
};

export default WhoFollow;
