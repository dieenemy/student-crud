import React from 'react';
import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/solid';
import { MainContent } from './Student.styled';

function Student() {
  return (
    <MainContent>
      <div>Student details</div>
      <div className="title">
        <span>No</span>
        <span>Name</span>
        <span>Age</span>
        <span>Address</span>
        <span>Gender</span>
        <span>Birthday</span>
        <span>More</span>
      </div>
      <div>
        <span>1</span>
        <span>Pearuss</span>
        <span>21</span>
        <span>Hai Duong</span>
        <span>Male</span>
        <span>25/08/2000</span>
        <span>
          <PlusCircleIcon />
          <XCircleIcon />
        </span>
      </div>
      <div>
        <span>1</span>
        <span>Pearuss</span>
        <span>21</span>
        <span>Hai Duong</span>
        <span>Male</span>
        <span>25/08/2000</span>
        <span>
          <PlusCircleIcon />
          <XCircleIcon />
        </span>
      </div>
      <button type="button">Load More</button>
    </MainContent>
  );
}

export default Student;
