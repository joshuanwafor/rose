import Head from "next/head";
import Script from "next/script";
import { ProductCard } from "../ui/organisms/ProductCard";
import { AppTemplate } from "../ui/templates/AppTemplate";
import { GetServerSidePropsContext } from "next";
import { getHomePage, getPageData } from "../lib";
import { pageDataManager } from "../src/store/pageData";

export default function Home() {
  return (
    <AppTemplate>
      <div className="container my-5">
        <div className="d-flex justify-content-between">
          <h3>Products</h3>
        </div>
        <div className="d-flex justify-content-between my-2">
          <div>
            <span>Filter: </span>

            <span className="dropdown mx-3">
              <span
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Price
              </span>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Default
                  </a>
                </li>
              </ul>
            </span>
          </div>
          <span>{pageDataManager.products.length} Products </span>
        </div>
        <div className="row my-3">
          {pageDataManager.products.map((e) => {
            return (
              <div className="col-6 col-md-3 mb-2">
                <ProductCard product={e} />
              </div>
            );
          })}
        </div>
      </div>
    </AppTemplate>
  );
}

export async function getServerSideProps({
  req,
  res,
  resolvedUrl,
  params,
}: GetServerSidePropsContext) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const origin = req.headers.host;
  return {
    props:getHomePage(origin), // will be passed to the page component as props
  };
}
