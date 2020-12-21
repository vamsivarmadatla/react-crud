import React from "react";
import ModalPop from "../ModalPop";
import AddUser from "../user/AddUser";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import Contact from "./Contact";

const Navbars = () => {
  const navColor = { color: "#FFFFFF", fontWeight: "600" };
  return (
    <>
      <Navbar bg="warning" style={navColor} expand="lg">
        <Navbar.Brand href={`/`}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={`/`}>Home</Nav.Link>
            <Nav.Link href={`/about`}>About</Nav.Link>
            <Nav.Link href={`/contact`}>Contact</Nav.Link>
            {/* <NavDropdown title="Country" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">India</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">USA</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">UK</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Australia</NavDropdown.Item>
            </NavDropdown>*/}
          </Nav>
          <Nav>
            {/* <Nav.Link href={`/users/add`}>Add User</Nav.Link> */}
            <ModalPop
              popname="Buy Vehicle"
              poptitle="select your vehicle"
              popbody={<Contact />}
            />
            <ModalPop popname="add user" popbody={<AddUser />} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navbars;
