import { useState } from "react"

export const MainHeader = () => {
  return <div>
    <nav className="d-none d-md-block  navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container py-2">
        <a className="navbar-brand" href="#">
          <h1 style={{ fontWeight: "bolder", fontSize: 24 }}>ROSE</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{}}>
            <li className="nav-item">
              <a className="nav-link active"  href="catalog">All Products</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Departments
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Policy</a>
            </li>
          </ul>
          <UserActions />
        </div>
      </div>
    </nav>
    <MobileMenu />
  </div>
}

function MobileMenu() {

  let [showMenu, setShowMenu] = useState(false)


  return <div>
    <div className="d-md-none">
      <nav className=" navbar ">
        <div className="container py-2">
          <div style={{ fontSize: 25 }} onClick={() => {
            setShowMenu(true)
          }}>
            <i className="bi bi-list"></i>
          </div>
          <a className="navbar-brand" href="#">
            <h1 style={{ fontWeight: "bolder", fontSize: 24 }}>ROSE</h1>
          </a>

          <UserActions />
        </div>
      </nav>

      {showMenu == true ? <div style={{
        top: 0,
        left: 0,
        position: "fixed", height: "100vh", width: "100%", background: "white",
        zIndex: 100
      }}>
        <div className="p-2" style={{
          display: "flex", flexDirection: "column",
          alignContent: "stretch", alignItems: "stretch",
          justifyContent: "space-between",
          justifyItems: "stretch",
          height: "100%"
        }}>
          <div className="container py-2 d-flex justify-content-between">
            <div style={{ fontSize: 25 }} onClick={() => {
              setShowMenu(false)
            }} >
              <i className="bi bi-x"></i>
            </div>
            <a className="navbar-brand" href="#">
              <h1 style={{ fontWeight: "bolder", fontSize: 24 }}>ROSE</h1>
            </a>
            <UserActions />
          </div>
          <div className="container" style={{ overflowY: "auto", flex: 1 }}>
            {[1, 2, 3, 4].map(e => {
              return <a href="#"><p className="my-3">Link Goes</p></a>
            })}
          </div>
          <div className="container">
            <button className="btn w-100 btn-primary">Login</button>
          </div>
        </div>
      </div> : null}
    </div>
  </div>
}

function UserActions() {
  return <div style={{ fontSize: 20 }}>
    <i className="bi bi-search mx-2"></i>
    <i className="bi bi-person mx-2"></i>
    <i className="bi bi-bag mx-2"></i>
  </div>
}