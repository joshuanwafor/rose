import { getHomePage, getPageData } from "../lib";
import { MainBody } from "../ui/organisms/MainBody";
import { PageTitle } from "../ui/organisms/PageTitle";
import {
  RenderFeaturedProducts,
  RenderProductsMin,
} from "../ui/sections/RenderProductsMin";
import { AppTemplate } from "../ui/templates/AppTemplate";
import { GetServerSidePropsContext } from "next";

export default function Cart() {
  return (
    <div>
      <AppTemplate>
        <PageTitle
          title="My Cart"
          right={
            <a
              style={{ textAlign: "right", textDecoration: "underline" }}
              href="/catalog"
            >
              Continue shopping{" "}
            </a>
          }
        ></PageTitle>
        <MainBody>
          <div>
            <table className="table  my-5">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((_) => {
                  return <RenderCartItem />;
                })}
              </tbody>
            </table>

            <div className="d-flex justify-content-end my-5">
              <div style={{ textAlign: "right" }}>
                <p>Subtotal: 10,000 goes here</p>
                <button className="btn btn-primary btn-lg mt-2">
                  Checkout
                </button>
              </div>
            </div>

            <div className="my-5">
              <RenderFeaturedProducts />
            </div>
          </div>
        </MainBody>
      </AppTemplate>
    </div>
  );
}

function RenderCartItem() {
  return (
    <tr>
      <td>
        <div className="row">
          <div
            className="col-6"
            style={{
              backgroundColor: "gray",
              width: "80px",
              height: "80px",
              backgroundImage: `url(https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="col-6">
            <p>Product name</p>
            <p>$10,000</p>
          </div>
        </div>
      </td>
      <td>
        <div></div>
      </td>
      <td>$100,000</td>
    </tr>
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
    props: getHomePage(origin), // will be passed to the page component as props
  };
}
