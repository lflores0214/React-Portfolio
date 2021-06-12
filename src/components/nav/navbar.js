import React from "react";
import { NavbarWrapper } from "./navbar.styled";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/projects" activeClassName="active">
        Projects
      </NavLink>
      <NavLink to="contact" activeClassName="active">
        Contact
      </NavLink>
    </NavbarWrapper>
  );
};

export default Navbar;
