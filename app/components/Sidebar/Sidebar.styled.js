import styled from 'styled-components';

export const SideBarContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  width: 260px;
  height: 100vh;
  background: linear-gradient(
    127deg,
    rgba(0, 105, 0, 1.2),
    rgba(0, 105, 0, 0.5) 98.71%
  );
  box-sizing: border-box;
  border-radius: 4px;
  color: white;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(124, 209, 13) !important;
  /* transform: scale(1.6) !important; */
  padding: 2rem 0 4rem 0;
  margin-bottom: 1rem;
  /* pointer-events: none; */

  svg {
    height: 8rem;
    width: 8rem;
  }
`;
export const NavBar = styled.ul`
  height: 100%;
  li {
    list-style: none;
    padding-bottom: 1rem;

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      color: white !important;
      padding: 0.8rem;
      border-radius: 2rem;

      svg {
        height: 2rem;
        width: 2rem;
      }

      span {
        font-size: 16px;
        padding-left: 1.6rem;
        font-weight: 400;
      }
    }
    .active {
      background-color: #1a851d !important;
    }
  }
`;
