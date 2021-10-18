import React from 'react';
import { CakeIcon, UserIcon, LocationMarkerIcon } from '@heroicons/react/solid';
import Modal from '../../components/Modal/Modal';
import {
  Container,
  StudentInfo,
  SubjectInfo,
  CancelButton,
} from './StudentModalView.styled';

function StudentModalView({ open, onClose }) {
  return (
    <Modal open={open}>
      <Container>
        <StudentInfo>
          <h2>Le Huynh Duc</h2>
          <p>
            <UserIcon />
            <span>Male</span>
          </p>
          <p>
            <CakeIcon />
            <span>25/08/2000</span>
          </p>
          <p>
            <LocationMarkerIcon />
            <span>Hai Duong</span>
          </p>
        </StudentInfo>

        <SubjectInfo>
          <p>
            <span>Subject</span>
            <span>Score</span>
          </p>

          <p>
            <span>English</span>
            <span>10</span>
          </p>
          <p>
            <span>English</span>
            <span>10</span>
          </p>
          <p>
            <span>History</span>
            <span>10</span>
          </p>
        </SubjectInfo>
      </Container>
      <CancelButton>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </CancelButton>
    </Modal>
  );
}

export default StudentModalView;
