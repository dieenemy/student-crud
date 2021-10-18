import React from 'react';
import { MainContent } from '../Subject/Subject.styled';
import ClassChild from './ClassChild';

function Class() {
  return (
    <MainContent>
      <div>Class details</div>
      <div className="title">
        <span>No</span>
        <span>Name</span>
        <span>More</span>
      </div>
      <ClassChild />
      <button type="button">Load More</button>
    </MainContent>
  );
}

export default Class;
