import React from 'react';

import { Name } from './styles';

export interface Props {
  itemName?: string;
}

const NameItem: React.FC<Props> = ({ itemName }) => {
  return <Name>{itemName}</Name>;
};

export default NameItem;
