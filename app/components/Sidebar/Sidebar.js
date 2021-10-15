import React from 'react';
import { NavLink } from 'react-router-dom';
import { BeakerIcon } from '@heroicons/react/solid';
import { SideBarContainer, Logo, NavBar } from './Sidebar.styled';

function Sidebar() {
  return (
    <SideBarContainer>
      <Logo>
        <BeakerIcon className="logo-icon" />
      </Logo>

      <NavBar>
        <li>
          <NavLink to="/" exact>
            <BeakerIcon />
            <span>Students</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/classes">
            <BeakerIcon />
            <span>Class</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/subjects">
            <BeakerIcon />
            <span>Subject</span>
          </NavLink>
        </li>
      </NavBar>
    </SideBarContainer>
  );
}

export default Sidebar;
