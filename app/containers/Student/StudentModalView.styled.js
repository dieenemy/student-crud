import styled from 'styled-components';
import { FootModal } from '../../components/Header/ModalStudent.styled';

export const StudentInfo = styled.div`
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

  /* p {
    display: flex;
    border-bottom: 1px solid lightgray;

    input {
      border: none;
      background-color: inherit;
      margin-left: 10rem;
    }
  } */
  /* button {
    position: absolute;
    width: 10rem;
    height: 3rem;
    right: -14rem;
    bottom: 4%;
    padding: 0.4rem 1rem;
    background-color: #2fa72f;
    color: white;
    border: none; */
  }
`;
export const CancelButton = styled(FootModal)`
  position: absolute;
  bottom: 5%;
  right: 5%;
  color: white;
`;
