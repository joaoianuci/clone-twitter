import React, { useState, useEffect } from 'react';
import { Grid, Header } from './styles';
import UserNavigation from '../UserNavigation';
import UserInfo from '../UserInfo';
import HeaderInfo from '../HeaderInfo';
import TweetData from '../TweetData';
import SearchBar from '../SearchBar';
import WhatHappening from '../WhatHappening';
import WhoFollow from '../WhoFollow';
import LoadingSpinner from '../LoadingSpinner';

const Layout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {isLoading ? (
        <LoadingSpinner size={50} color={'#1DA1F2'} loading={isLoading} />
      ) : (
        <Grid>
          <Header>
            <UserNavigation />
            <UserInfo user="flex" userName="@layout" />
          </Header>
          <div>
            <HeaderInfo />
            <TweetData />
          </div>
          <div>
            <SearchBar />
            <WhatHappening />
            <WhoFollow />
          </div>
        </Grid>
      )}
    </>
  );
};

export default Layout;
