import React from 'react';

import { Grid, Header } from './styles';
import UserNavigation from '../UserNavigation';
import UserInfo from '../UserInfo';
import HeaderInfo from '../HeaderInfo';
import TweetData from '../TweetData';
import SearchBar from '../SearchBar';
import WhatHappening from '../WhatHappening';
import WhoFollow from '../WhoFollow';

const Layout: React.FC = () => {
  return (
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
  );
};

export default Layout;
