import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { ArrowCircleRightIcon, SearchIcon } from '@heroicons/react/solid';
import { Container, Left, Right } from './Header.styled';
import ModalStudent from './ModalStudent';
import ModalClass from './ModalClass';
import ModalSubject from './ModalSubject';

function Header(props) {
  // const location = useLocation();
  const page = props.location.pathname;

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

      {page === '/' && (
        <ModalStudent
          titleValue="Add a Student"
          open={isOpenModal}
          onClose={() => setIsOpenModal(false)}
        />
      )}
      {page === '/classes' && (
        <ModalClass
          titleValue="Add a Class"
          open={isOpenModal}
          onClose={() => setIsOpenModal(false)}
        />
      )}
      {page === '/subjects' && (
        <ModalSubject
          titleValue="Add a Subject"
          open={isOpenModal}
          onClose={() => setIsOpenModal(false)}
        />
      )}
    </Container>
  );
}

export default withRouter(Header);
