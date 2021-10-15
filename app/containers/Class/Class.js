import React from 'react';
import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/solid';
import { MainContent } from '../Subject/Subject.styled';

function Class() {
  return (
    <MainContent>
      <div>Class details</div>
      <div className="title">
        <span>No</span>
        <span>Name</span>
        <span>More</span>
      </div>
      <div>
        <span>1</span>
        <span>Information Technology</span>
        <span>
          <PlusCircleIcon />
          <XCircleIcon />
        </span>
      </div>
      <div>
        <span>1</span>
        <span>Information Technology</span>
        <span>
          <PlusCircleIcon />
          <XCircleIcon />
        </span>
      </div>
      <button type="button">Load More</button>
    </MainContent>
  );
}

export default Class;
