import React from 'react';

import { Container, Name, User, UserData, UserName } from './styles';
import { FiChevronDown } from 'react-icons/fi';
import Icon from '../Icon';
import { UserIcon } from '../../styles/GlobalStyles';

export interface Props {
  userName: string;
  user: string;
}

const UserInfo: React.FC<Props> = ({ userName, user }) => {
  return (
    <Container>
      <UserIcon />
      <User>
        <UserData>
          <Name>{user}</Name>
          <UserName>{userName}</UserName>
        </UserData>
        <Icon icon={<FiChevronDown />} />
      </User>
    </Container>
  );
};

export default UserInfo;
