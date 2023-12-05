import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import "./CartItem.css";
import Row from "react-bootstrap/Row";
import NavbarProduct from "./NavbarProduct";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const products = useSelector((state) => state.products);
  console.log(products);
  const productsObj = {};
  products.forEach((element) => {
    if (!productsObj[element]) {
      productsObj[element] = 1;
    } else {
      productsObj[element]++;
    }
  });
  console.log(productsObj);
  const totalPrices = useSelector((state) => state.cartPrice);
  const cartValue = useSelector((state) => state.cart);

  const navigate = useNavigate();

  function handleClick() {
    navigate("/checkout");
  }

  return (
    <div>
      <NavbarProduct isSearch={false} />
      {cartValue !== 0 ? (
        <>
          <Row lg={3} style={{ marginTop: "20px" }}>
            {Object.keys(productsObj).map((item, key) => (
              <CartItem item={item} key={key} productsObj={productsObj} />
            ))}
          </Row>
          <div className="app-container centered-text">
            Cart Value = ${totalPrices}
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              className="btn btn-dark"
              type="button"
              onClick={handleClick}
            >
              Checkout
            </button>
          </div>
        </>
      ) : (
        <div
          className="alert alert-warning"
          role="alert"
          style={{ marginTop: "75px", textAlign: "center" }}
        >
          No Item Present in Cart, Please Add
        </div>
      )}
    </div>
  );
};

export default Cart;
