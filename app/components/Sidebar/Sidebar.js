import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  CloudUploadIcon,
  UserCircleIcon,
  BookmarkAltIcon,
  ClipboardListIcon,
} from '@heroicons/react/solid';
import { SideBarContainer, Logo, NavBar } from './Sidebar.styled';

function Sidebar() {
  return (
    <SideBarContainer>
      <Logo>
        <CloudUploadIcon className="logo-icon" />
      </Logo>

      <NavBar>
        <li>
          <NavLink to="/" exact>
            <UserCircleIcon />
            <span>Students</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/classes">
            <BookmarkAltIcon />
            <span>Class</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/subjects">
            <ClipboardListIcon />
            <span>Subject</span>
          </NavLink>
        </li>
      </NavBar>
    </SideBarContainer>
  );
}

export default Sidebar;
