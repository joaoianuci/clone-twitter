import React, { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';

import { Container, Input } from './styles';
import Icon from '../Icon';
import { MdClose } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';

const SearchBar: React.FC = () => {
  const [actived, setActived] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  return (
    <ClickAwayListener onClickAway={() => setActived(false)}>
      <Container className={actived ? 'actived' : ''}>
        <div>
          <Icon icon={<FiSearch />} />

          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onClick={() => setActived(true)}
            placeholder="Buscar no twitter"
          />
        </div>
        <Icon
          icon={<MdClose />}
          handleClick={() => {
            setSearchValue('');
            setActived(false);
          }}
        />
      </Container>
    </ClickAwayListener>
  );
};

export default SearchBar;
