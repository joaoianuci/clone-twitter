import React from 'react';
import { Container, PageName, Row } from './styles';
import { WiStars } from 'react-icons/wi';
import Icon from '../Icon';
import { UserIcon } from '../../styles/GlobalStyles';

const HeaderInfo: React.FC = () => {
  return (
    <Container>
      <Row>
        <UserIcon />
        <PageName>Página Inicial</PageName>
      </Row>
      <Icon hover icon={<WiStars />} />
    </Container>
  );
};

export default HeaderInfo;
