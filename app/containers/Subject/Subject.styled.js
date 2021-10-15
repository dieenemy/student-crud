import styled from 'styled-components';

export const MainContent = styled.div`
  box-sizing: border-box;
  width: calc(100vw - 275px);
  /* margin: 1rem 2rem 2rem 310px; */
  margin-left: 260px;
  padding: 1rem 2rem;
  min-height: calc(100vh - 98px);
  background: #f4ffef;
  border-radius: 4px;
  box-shadow: 1px 2px 5px 0px gray;
  position: relative;

  button {
    position: absolute;
    right: 5%;
    bottom: 5%;
    padding: 0.8rem 1.6rem;
    background-color: rgb(47, 167, 47);
    border: none;
    border-radius: 4rem;
    color: white;
  }

  div {
    &:first-child {
      font-size: 20px;
      font-weight: 600;
      background-color: #f4ffef;
      border-right: none;
      border-left: none;
    }

    background-color: white;
    display: flex;
    align-items: center;
    padding: 0.6rem 1rem;
    border: 1px solid lightgray;
    border-top: none;

    > * {
      flex: 1;
      &:last-child {
        /* flex-basis: 50%; */
        margin-left: 40%;
      }
    }
    span {
      svg {
        /* padding: 0.4rem 1rem; */
        height: 2rem;
        width: 2rem;

        &:first-child {
          color: rgb(47, 167, 47);
          margin-right: 2rem;
        }
        &:last-child {
          color: rgb(233, 87, 87);
        }
      }
    }
  }
  .title {
    padding: 0.4rem 1.2rem;
    background-color: #f4ffef;
  }
`;
