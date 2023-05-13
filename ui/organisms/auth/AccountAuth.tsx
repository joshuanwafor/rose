import { Col, Row } from "react-bootstrap";
import { AccountLogin } from "./AccountLogin";

export function AccountAuth() {
  return (
    <div>
      <Row className="justify-content-center">
        <Col md={6} className="border p-3">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Create account
              </a>
            </li>
          </ul>
            <div className="my-3"/>
          <AccountLogin />
        </Col>
      </Row>
    </div>
  );
}
