import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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
          <Link
            to="/create"
            style={{
              textDecoration: "none",
              color: "black",
              margin: "0px 20px",
              cursor: "pointer",
            }}
          >
            Create a post
          </Link>
          <Link
            to="/liked"
            style={{
              textDecoration: "none",
              color: "black",
              margin: "0px 20px",
              cursor: "pointer",
            }}
          >
            Liked Posts
          </Link>
          <Link
            to="/disliked"
            style={{
              textDecoration: "none",
              color: "black",
              margin: "0px 20px",
              cursor: "pointer",
            }}
          >
            Disliked Posts
          </Link>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
              margin: "0px 20px",
              cursor: "pointer",
            }}
          >
            Home
          </Link>
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
