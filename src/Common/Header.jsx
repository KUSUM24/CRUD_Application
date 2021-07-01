import React, { useContext, useRef } from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SearchContext } from "../App";
import "./styles/header.css";

export const Header = () => {
  const handleSearch = useContext(SearchContext);
  const searchRef = useRef();
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
            to="/CRUD_Application"
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
            ref={searchRef}
            placeholder="Search Posts..."
            className="mr-sm-2"
            onChange={() => handleSearch(searchRef.current.value)}
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
