import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;
export const ModalContent = styled.div`
  position: fixed;
  top: 44%;
  left: 50%;
  background-color: #f4ffef;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 40vw;
  min-height: 50vh;
  padding: 1.6rem 7rem;
  border-radius: 0.4rem;
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-weight: 600;
  }
  input {
    padding: 0.4rem 1rem;
    margin-bottom: 1rem;
    :hover,
    :focus {
      background-color: rgba(0, 105, 0, 0.3);
    }
  }
`;
