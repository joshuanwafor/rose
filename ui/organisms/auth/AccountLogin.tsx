import Notiflix from "notiflix";
import { useState } from "react";
import { authManager } from "../../../src/store/auth";

export function AccountLogin() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={password}
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button
          className="btn btn-primary"
          onClick={async () => {
            try {
              Notiflix.Loading.dots();
              await authManager.login(email, password);
              Notiflix.Loading.remove();
            } catch (err) {
              console.log(err);
              Notiflix.Loading.remove();
            }
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
