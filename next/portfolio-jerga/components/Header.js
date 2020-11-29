import React, { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";

export default () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Navbar color="faded" light>
      <NavbarBrand href="/" className="text-muted mr-auto">
        Next.js
      </NavbarBrand>
      <NavbarToggler
        onClick={() => setCollapsed(!collapsed)}
        className="mr-2"
      />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/porfolios">Porfolios</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
