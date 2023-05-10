import { pageDataManager } from "../src/store/pageData";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  pageDataManager.setData(
    pageProps.site_meta,
    pageProps.products,
    pageProps.collections
  );
  pageDataManager.setCurrentProduct(pageProps.product);
  return (
    <div>
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"></script> */}
      <Component {...pageProps} />
      {/* <script type="text/javascript" src="/scripts/tiny.slider.js"></script> */}
    </div>
  );
}
