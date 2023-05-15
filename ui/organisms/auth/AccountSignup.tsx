import Notiflix from "notiflix";
import { useState } from "react";
import { authManager } from "../../../src/store/auth";
import { useForm } from "react-hook-form";
import { SignUpDto } from "../../../src/sdk/auth";
import { Col, Row } from "react-bootstrap";

export function AccountSignup() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<SignUpDto>({
    defaultValues: {
      account_type: "INDIVIDUAL_ACCOUNT",
    },
  });
  return (
    <div>
      <div className="mb-3">
        <h3>Create new account</h3>

        <Row>
          <Col md={6}>
            {" "}
            <label className="form-label">First name</label>
            <input
              type="text"
              className="form-control"
              {...register("first_name", { required: true })}
            />
          </Col>
          <Col md={6}>
            <label className="form-label">Last name</label>
            <input
              type="text"
              className="form-control"
              {...register("last_name", { required: true })}
            />
          </Col>

          <Col md={12}>
            <label className="form-label">Phone number</label>
            <input
              type="text"
              className="form-control"
              {...register("phone", { required: true })}
            />
          </Col>

          <Col md={12}>
            {" "}
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              {...register("email", { required: true })}
            />
          </Col>
          <Col md={12}>
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              {...register("password", { required: true })}
            />
          </Col>
        </Row>
      </div>

      <div className="d-flex  justify-content-between">
        <button
          className="btn btn-primary"
          onClick={async () => {
            try {
              Notiflix.Loading.dots();
              await authManager.register({
                ...getValues(),
              });
              Notiflix.Loading.remove();
            } catch (err) {
              console.log(err);
              Notiflix.Loading.remove();
            }
          }}
        >
          Submit
        </button>
        <a href="https://web.bigmerchant.ng/auth/recover-password">
          Forgot password?
        </a>
      </div>
    </div>
  );
}
