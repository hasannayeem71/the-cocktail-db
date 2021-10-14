import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth";
import useSearch from "../../hooks/useSearch";
const NavBar = () => {
  const { logOut, user } = useAuth();
  const { text, setText } = useSearch();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className=" pb-5">
      <Navbar bg="light" expand="lg" className="fixed-top ">
        <Container fluid className="d-flex no-wrap">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Navbar.Brand as={HashLink} to="/">
              <img src="https://www.thecocktaildb.com/images/logo.png" alt="" />
            </Navbar.Brand>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <Nav.Link as={HashLink} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#cocktails">
                Cocktails
              </Nav.Link>
              <Nav.Link as={HashLink} to="/random#random">
                Play Game
              </Nav.Link>
              <Nav.Link as={HashLink} to="/random#game">
                Random
              </Nav.Link>

              {user ? (
                <Nav.Link onClick={logOut}>Logout</Nav.Link>
              ) : (
                <Nav.Link as={HashLink} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
          <input
            as={NavLink}
            type="text"
            placeholder="Search Cocktail Here"
            className="lg-w-25 md-w-25 sm-w-50  p-1 rounded"
            onChange={handleChange}
          />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
