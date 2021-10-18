import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 260px;
  width: calc(100vw - 261px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3.4rem 0.6rem 2rem;
  background-color: #f4ffef;
`;
export const Left = styled.div`
  display: flex;
  align-items: center;
  color: gray !important;
  svg {
    height: 2rem;
    width: 2rem;
  }
  input {
    padding: 0.4rem 1rem;
    margin-left: 1rem;
    background-color: inherit;
    border: none;
    font-weight: 500;
    font-size: 18px;

    &:active,
    &:focus {
      outline: none;
      border-bottom: 2px solid green;
    }
  }
`;
export const Right = styled.div`
  display: flex;
  align-items: center;

  button {
    padding: 0.6rem 1.8rem;
    background: rgb(47, 167, 47);
    font-size: 18px;
    font-weight: 500;
    border-radius: 0.2rem;
    margin: 1.2rem 0;
    border: none;
    display: flex;
    align-items: center;
    color: white;
    transition: all 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275) ease-in-out;
    &:active {
      transform: scale(1.1);
    }

    svg {
      height: 1.6rem;
      width: 1.6rem;
      margin-left: 4px;
    }
  }
`;
