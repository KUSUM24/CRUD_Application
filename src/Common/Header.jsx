import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import "./styles/header.css";

export const Header = () => {
  return (
    <Navbar className="header-main" expand="lg">
      <Navbar.Brand className="heading" href="/">
        <b>CRUD Application</b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="collapse">
        <Nav className="mr-auto">
          <Nav.Link href="#link">Create a post</Nav.Link>
          <Nav.Link href="#home">Liked Posts</Nav.Link>
          <Nav.Link href="#link">Disliked Posts</Nav.Link>
        </Nav>
        <Form className="form-search">
          <FormControl
            type="text"
            placeholder="Search Posts..."
            className="mr-sm-2"
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
