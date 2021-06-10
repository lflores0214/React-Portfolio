import React from "react";
import { NavbarWrapper } from "./navbar.styled";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <a href="#" className="active">
        Home
      </a>
      <a href="#">about</a>
      <a href="#">projects</a>
      <a href="#">contacts</a>
    </NavbarWrapper>
  );
};

export default Navbar;
