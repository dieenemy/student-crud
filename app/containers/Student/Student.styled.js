import styled from 'styled-components';
import { ChildContent } from './StudentChild.styled';

export const MainContent = styled.div`
  width: calc(100vw - 261px);
  margin-left: 260px;
  padding: 1rem 2rem;
  min-height: calc(100vh - 98px);
  background: #f4ffef;
  border-radius: 4px;
  box-shadow: 1px 2px 5px 0px gray;
  position: relative;

  button {
    padding: 0.8rem 1.6rem;
    background-color: rgb(47, 167, 47);
    border: none;
    border-radius: 4rem;
    display: flex;
    margin-left: auto;
    margin-top: 2rem;
    color: white;
    transition: all 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275) ease-in-out;
    &:active {
      transform: scale(1.1);
    }
  }
  button.hiddenButton {
    display: none;
  }

  div {
    &:nth-child(1) {
      font-size: 20px;
      font-weight: 600;
      background-color: #f4ffef;
      border-right: none;
      border-left: none;
    }
  }
`;
export const Title = styled(ChildContent)`
  padding: 0.4rem 1.2rem;
  background-color: #f4ffef;
  border-top: 1px solid lightgray;
`;
