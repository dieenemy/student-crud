import styled from 'styled-components';

export const Main = styled.div`
  background-color: #f4ffef;
  height: calc(100vh - 110px);
`;

export const Container = styled.div`
  display: flex;
  margin-left: calc(260px + 20vw);
  margin-top: 2rem;
  height: calc(100vh - 300px);
  width: 40vw;
  border: 1px solid lightgray;
  border-radius: 4px;

  display: flex;
  > * {
    flex-basis: auto;
    width: 33%;
  }

  button {
    color: white;
  }
`;
export const StudentInfoCol = styled.div`
  padding: 2.4rem 0 0 3rem;
  border-right: 1px solid lightgray;
  display: flex;
  flex-direction: column;

  p {
    display: flex;
    align-items: center;
    svg {
      height: 2rem;
      width: 2rem;
      margin-top: -4px;
      margin-right: 8px;
    }
  }
`;
export const SubjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 4.24rem 4rem;
  border-right: 1px solid lightgray;
`;

export const ScoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  row-gap: 2rem;
  input {
    border: none;
    background-color: inherit;
    border-bottom: 1px solid lightgray;
  }
`;
export const GroupButton = styled.div`
  position: absolute;
  bottom: 5%;
  right: 5%;
  button {
    padding: 0.4rem 1rem;
    background-color: #2fa72f;
    color: white;
    border: none;
    margin-left: 1rem;
    border-radius: 0.2rem;
  }
`;
