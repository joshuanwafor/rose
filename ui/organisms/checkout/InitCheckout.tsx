import { observer } from "mobx-react";
import { PublishUserOrderDto } from "../../../src/sdk/storefront";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { cartManager } from "../../../src/store/cart";
import { Row, Col, ButtonGroup, ToggleButton } from "react-bootstrap";
import React from "react";
import { pageDataManager } from "../../../src/store/pageData";
import Notiflix from "notiflix";
import { orderController } from "../../../config/sdk";
import { useCheckout } from "../../../hooks/use-checkout";

let Country = require("country-state-city").Country;
let State = require("country-state-city").State;

export const InitCheckout = observer(() => {
  let { checkout } = useCheckout();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<PublishUserOrderDto>();

  const [radioValue, setRadioValue] = useState("PICKUP");

  useEffect(() => {
    setValue("items", cartManager.cart);
  }, []);

  const radios = [
    { name: "Store pickup", value: "PICKUP" },
    { name: "Home delivery", value: "HOME" },
  ];

  let branch: any = pageDataManager.branches[0];
  return (
    <div className="mb-5">
      <div style={{}}>
        <>
          <ButtonGroup className="mb-3">
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={
                  radioValue === radio.value
                    ? "outline-success"
                    : "outline-dark"
                }
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => {
                  //@ts-ignore
                  if (e == "PICKUP") {
                    setValue("delivery_address", {
                      address: "",
                      city: "",
                      country: "",
                      postal_code: "",
                      state: "",
                    });
                  } else {
                    setValue("delivery_address", {
                      address: "",
                      city: "",
                      country: "",
                      postal_code: "",
                      state: "",
                    });
                  }
                  setRadioValue(e.currentTarget.value);
                }}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>

          {radioValue == "HOME" ? (
            <React.Fragment>
              <h3>Billing address</h3>
              <Row>
                <Col md={12} className="my-2">
                  <label htmlFor="inputState">Country</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    {...register("delivery_address.country")}
                    id="inputCountry"
                    placeholder="Type here"
                  />
                </Col>
                <Col md={12} className="my-2">
                  <div>
                    <label htmlFor="inputAddress">Address</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      {...register("delivery_address.address")}
                      id="inputAddress"
                      placeholder="1234 Main St"
                    />
                  </div>
                </Col>
                <Col md={4} className="my-2">
                  <label htmlFor="inputCity">City</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    {...register("delivery_address.city")}
                    id="inputCity"
                  />
                </Col>
                <Col md={4} className="my-2">
                  <label htmlFor="inputState">State</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    {...register("delivery_address.state")}
                    id="inputState"
                    placeholder="Type here"
                  />
                </Col>
                <Col md={4} className="my-2">
                  <label htmlFor="inputZip">Zip</label>
                  <input
                    type="text"
                    className="form-control "
                    {...register("delivery_address.postal_code")}
                  />
                </Col>
              </Row>{" "}
            </React.Fragment>
          ) : null}

          {radioValue == "PICKUP" ? (
            <div style={{ marginBottom: 24 }}>
              <h3>Pickup address</h3>
              <p>Main branch</p>
              <p>
                {branch.location.address} {branch.location.city}
                <br />
                {branch.location.state}. {branch.location.country}
              </p>
            </div>
          ) : null}

          <div className="d-flex justify-content-between align-items-center">
            <a
              style={{
                textAlign: "right",
                textDecoration: "underline",
              }}
              href="/cart"
            >
              go to cart
            </a>

            {cartManager.cart.length == 0 ? null : (
              <button
                className="btn btn-primary btn-lg mt-2"
                onClick={async () => {
                  checkout(branch, getValues(), radioValue);
                }}
              >
                Place order
              </button>
            )}
          </div>
        </>
      </div>
    </div>
  );
});
