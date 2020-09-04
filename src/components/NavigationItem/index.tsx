import React from 'react';

import { Container } from './styles';
import Icon from '../Icon';
import NameItem from '../NameItem';

export interface Props {
  essential?: boolean;
  icon?: React.ReactElement | React.ReactNode;
  itemName?: string;
}

const NavigationItem: React.FC<Props> = ({ essential, icon, itemName }) => {
  return (
    <Container essential={essential} itemName={itemName}>
      <Icon icon={icon} />
      {itemName ? <NameItem itemName={itemName} /> : <></>}
    </Container>
  );
};

export default NavigationItem;
