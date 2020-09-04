import React from 'react';

import { Container, TweetButton } from './styles';
import {
  FiHome,
  FiTwitter,
  FiMail,
  FiList,
  FiMoreHorizontal,
  FiUser,
  FiStar,
  FiBell,
  FiHash,
  FiFeather,
  FiSearch,
} from 'react-icons/fi';
import NavigationItem from '../NavigationItem';
import Icon from '../Icon';

const UserNavigation: React.FC = () => {
  return (
    <Container>
      <NavigationItem icon={<FiTwitter />} itemName="" />
      <NavigationItem essential icon={<FiHome />} itemName="Página Inicial" />
      <NavigationItem icon={<FiHash />} itemName="Explorar" />
      <NavigationItem essential icon={<FiSearch />} itemName="Procurar" />
      <NavigationItem essential icon={<FiBell />} itemName="Notificações" />
      <NavigationItem essential icon={<FiMail />} itemName="Mensagens" />
      <NavigationItem essential icon={<FiStar />} itemName="Itens salvos" />
      <NavigationItem icon={<FiList />} itemName="Listas" />
      <NavigationItem icon={<FiUser />} itemName="Perfil" />
      <NavigationItem icon={<FiMoreHorizontal />} itemName="Mais" />

      <TweetButton id="tweet">
        <div>
          <span>Tweetar</span>
          <Icon icon={<FiFeather />} />
        </div>
      </TweetButton>
    </Container>
  );
};

export default UserNavigation;
