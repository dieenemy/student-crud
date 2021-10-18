import React from 'react';
import { MainContent } from './Subject.styled';
import SubjectChild from './SubjectChild';

function Subject() {
  return (
    <MainContent>
      <div>Subject details</div>
      <div className="title">
        <span>No</span>
        <span>Name</span>
        <span>More</span>
      </div>
      <SubjectChild />
      <SubjectChild />
      <SubjectChild />
      <button type="button">Load More</button>
    </MainContent>
  );
}

export default Subject;
