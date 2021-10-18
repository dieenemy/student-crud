import styled from 'styled-components';
import { FootModal } from '../../components/Header/ModalStudent.styled';

export const Container = styled.div`
  display: flex;
  > * {
    flex: 1;
  }
`;
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
  font-size: 18px;
  margin-top: 0.5rem;

  p {
    display: flex;
    align-items: center;
    justify-content: center;

    :first-child {
      border-bottom: 1px solid lightgray;
    }
    > * {
      flex: 1;
    }
  }
`;
export const CancelButton = styled(FootModal)`
  position: absolute;
  bottom: 5%;
  right: 5%;
`;
