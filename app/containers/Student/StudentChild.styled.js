import styled from 'styled-components';

export const ChildContent = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0.6rem 1rem;
  border: 1px solid lightgray;
  border-top: none;

  > * {
    flex: 1;
  }
  span {
    svg {
      height: 2rem;
      width: 2rem;
      margin-right: 2rem;

      &:first-child {
        color: rgb(47, 167, 47);
      }
      &:nth-child(2) {
        color: purple;
      }
      &:last-child {
        color: rgb(233, 87, 87);
      }
    }
  }
`;
