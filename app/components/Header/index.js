import React from 'react';
import { ArrowCircleRightIcon, SearchIcon } from '@heroicons/react/solid';
import { Container, Left, Right } from './Header.styled';

function Header() {
  return (
    <Container>
      <Left>
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </Left>
      <Right>
        <button type="button">
          Create new
          <ArrowCircleRightIcon />
        </button>
      </Right>
    </Container>
  );
}

export default Header;
