import { pageDataManager } from "../src/store/pageData";
import "./../init-firebase"
import 'firebaseui/dist/firebaseui.css'
import "../styles/globals.css";
import Notiflix from 'notiflix';
import { authManager } from "../src/store/auth";
import { cartManager } from "../src/store/cart";

export default function MyApp({ Component, pageProps }) {
  pageDataManager.setData(
    pageProps.site_meta,
    pageProps.products,
    pageProps.collections
  );
  
  pageDataManager.setCurrentProduct(pageProps.product);
  authManager.init();

  cartManager.loadCart();
  return (
    <div>
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"></script> */}
      <Component {...pageProps} />
      {/* <script type="text/javascript" src="/scripts/tiny.slider.js"></script> */}
    </div>
  );
}
