import React, { useState } from 'react';
import { ArrowCircleRightIcon, SearchIcon } from '@heroicons/react/solid';
import { Container, Left, Right } from './Header.styled';
import ModalStudent from './ModalStudent';

function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <Container>
      <Left>
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </Left>
      <Right>
        <button type="button" onClick={() => setIsOpenModal(true)}>
          Create new
          <ArrowCircleRightIcon />
        </button>
      </Right>
      <ModalStudent
        titleValue="Add a Student"
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
    </Container>
  );
}

export default Header;
