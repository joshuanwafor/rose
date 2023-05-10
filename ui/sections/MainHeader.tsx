import { useState } from "react";
import { pageDataManager } from "../../src/store/pageData";
import Link from "next/link";

export const MainHeader = () => {
  return (
    <div className="border-bottom">
      <nav className="navbar navbar-expand-lg container py-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            ROSE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/catalog">
                  All products
                </a>
              </li>
              {pageDataManager.collections.length == 0 ? null : (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Departments
                  </a>
                  <ul className="dropdown-menu">
                    {pageDataManager.collections.map((e) => {
                      return (
                        <li>
                          <a
                            className="dropdown-item"
                            //@ts-ignore
                            href={`/catalog?collection=${e.id}`}
                          >
                            {e.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              )}
            </ul>
            <UserActions />
          </div>
        </div>
      </nav>
    </div>
  );
};

function UserActions() {
  return (
    <form
      className="d-flex align-items-center"
      role="search"
      style={{ fontSize: 20 }}
    >
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <Link href={"/account"}>
        <i className="bi bi-person mx-2" style={{ fontSize: 28 }}></i>
      </Link>
      <Link href={"/cart"}>
        <i className="bi bi-bag mx-2" style={{ fontSize: 24 }}></i>
      </Link>
    </form>
  );
}
