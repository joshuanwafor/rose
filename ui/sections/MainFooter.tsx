export const MainFooter = () => {
  return (
    <div>
      <div className="btn-light border-top py-4">
        <div className="container">
          <footer className="py-3">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a href="/" className="nav-link px-2 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/catalog"
                  className="nav-link px-2 text-body-secondary"
                >
                  Catalog
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/privacy-policy"
                  className="nav-link px-2 text-body-secondary"
                >
                  Terms and Conditions
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/refund-policy"
                  className="nav-link px-2 text-body-secondary"
                >
                  Return policy
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
      <div className="border-top py-3 ">
        <p className="text-center text-body-secondary">
          © 2023, theme-rose Powered by Bigmerchant
        </p>
      </div>
    </div>
  );
};
