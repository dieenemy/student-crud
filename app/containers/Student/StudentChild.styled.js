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
    a {
      svg {
        color: rgb(47, 167, 47);
      }
    }

    svg {
      height: 2rem;
      width: 2rem;
      margin-right: 2rem;
      &:nth-child(2) {
        color: purple;
      }
      &:nth-child(3) {
        color: rgb(233, 87, 87);
      }
    }
  }
`;
