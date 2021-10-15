import React from 'react';
import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/solid';
import { MainContent } from './Subject.styled';

function Subject() {
  return (
    <MainContent>
      <div>Subject details</div>
      <div className="title">
        <span>No</span>
        <span>Name</span>
        <span>More</span>
      </div>
      <div>
        <span>1</span>
        <span>Pearuss</span>
        <span>
          <PlusCircleIcon />
          <XCircleIcon />
        </span>
      </div>
      <div>
        <span>1</span>
        <span>Pearuss</span>
        <span>
          <PlusCircleIcon />
          <XCircleIcon />
        </span>
      </div>
      <button type="button">Load More</button>
    </MainContent>
  );
}

export default Subject;
