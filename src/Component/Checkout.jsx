import React, { useState } from "react";
import { useSelector } from "react-redux";
import NavbarProduct from "./NavbarProduct";
import "./Checkout.css";

const Checkout = () => {
  const amount = useSelector((state) => state.cartPrice);

  const formValues = {
    cardNo: "",
    expiry: "",
    cvv: "",
    name: "",
  };

  const [values, setValues] = useState(formValues);

  const handleInputChange = (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  function openModal(e) {
    e.preventDefault();
    console.log(values);

    if (
      values.cardNo === "" ||
      values.expiry === "" ||
      values.cvv === "" ||
      values.name === ""
    ) {
      document.getElementById("exampleModalCenter").style.display = "none";
      document.getElementById("exampleModalCenter").classNameList.remove("show");
      const errorDiv = document.getElementsByclassNameName("error-msg")[0];
      errorDiv.innerHTML = "Please Fill All Fields";
      errorDiv.classNameList.add("text-danger");
    } else {
      document.getElementById("exampleModalCenter").style.display = "block";
      document.getElementById("exampleModalCenter").classNameList.add("show");
      const errorDiv = document.getElementsByclassNameName("error-msg")[0];
      errorDiv.innerHTML = "";
      errorDiv.classNameList.remove("text-danger");
    }
  }
  function closeModal() {
    document.getElementById("exampleModalCenter").style.display = "none";
    document.getElementById("exampleModalCenter").classNameList.remove("show");
  }
  // Get the modal
  var modal = document.getElementById("exampleModalCenter");

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      closeModal();
    }
  };

  return (
    <>
      <NavbarProduct isSearch={false} />
      <div className="row" style={{ marginTop: "70px" }}>
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form>
            <div className="form-row">
              <div className="form-group">
                <label for="inputAddress">Card Number</label>
                <input
                  name="cardNo"
                  value={values.cardNo}
                  onChange={handleInputChange}
                  required
                  type="number"
                  className="form-control"
                  id="inputAddress"
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-5">
                <label for="inputEmail4">Card Expiry</label>

                <input
                  value={values.expiry}
                  name="expiry"
                  onChange={handleInputChange}
                  required
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder=""
                />
              </div>
              <div className="form-group col-md-5">
                <label for="inputPassword4">Card CVV</label>
                <input
                  value={values.cvv}
                  name="cvv"
                  onChange={handleInputChange}
                  required
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder=""
                />
              </div>
            </div>

            <div className="form-group">
              <label for="inputAddress2">Name on card</label>
              <input
                value={values.name}
                name="name"
                onChange={handleInputChange}
                required
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder=""
              />
            </div>

            <div className="form-group">
              <label className="error-msg"></label>
            </div>

            <button
              onClick={openModal}
              className="btn btn-primary"
              style={{ marginTop: "10px" }}
            >
              Pay Securely - ${amount}
            </button>
          </form>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Payment Status
              </h5>
              <button
                type="button"
                className="close centered-text"
                onClick={closeModal}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Congratulations!! Payment Success
              <div className="check"></div>
              <p>Your Order Will Be Arriving in 3 Business days</p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
