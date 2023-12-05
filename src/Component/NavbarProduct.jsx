import React, { useState } from "react";
import { NavbarBrand } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import sortIcon from "../Icons/outline_filter_list_white_24dp.png";

const NavbarProduct = (props) => {
  const cart = useSelector((state) => state.cart);

  // const mystyle = {
  //   color: "white",
  //   backgroundColor: "DodgerBlue",
  //   padding: "10px",
  //   fontFamily: "Arial"
  // };

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    if (search.length > 1) {
      props.handleCallback(e.target.value);
    }
  };

  const [sort, setSort] = useState(true);

  //const sort = { asc: false };
  const handleSort = () => {
    setSort((crr) => !crr);
    props.handleSortCallback({ asc: sort });
    // }
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary fixed-top"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <NavbarBrand>
          <Link style={{ fontWeight: "bold" }} to="/">
            Snapdeal
          </Link>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link style={{ color: "White", fontWeight: "bold" }} to="/">
              Products
            </Link>
          </Nav>
        </Navbar.Collapse>
        {props.isSearch ? (
          <>
            <img onClick={handleSort} alt="" src={sortIcon} width="20px" />

            <p className="my-lg-0 me-2">
              <input
                onChange={handleChange}
                value={search}
                className="form-control mr-sm-2 "
                type="search"
                placeholder="Type 3 letters to search"
                aria-label="Search"
              />
            </p>
          </>
        ) : (
          ""
        )}
        <Link
          disabled
          style={{ color: "White", fontWeight: "bold" }}
          to="/cart"
        >
          Cart {cart}
        </Link>
      </Container>
    </Navbar>
  );
};

export default NavbarProduct;
