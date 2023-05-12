import { getHomePage, getPageData } from "../lib";
import { formatCurrency } from "../lib/utils";
import { OrderItem } from "../src/sdk/storefront";
import { cartManager } from "../src/store/cart";
import { pageDataManager } from "../src/store/pageData";
import { MainBody } from "../ui/organisms/MainBody";
import { PageTitle } from "../ui/organisms/PageTitle";
import {
  RenderFeaturedProducts,
  RenderProductsMin,
  RenderRelatedProducts,
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
                {cartManager.cart.map((_) => {
                  return <RenderCartItem item={_} />;
                })}
              </tbody>
            </table>

            <div className="d-flex justify-content-end my-5">
              <div style={{ textAlign: "right" }}>
                <p>Subtotal: {formatCurrency(cartManager.getCartTotal())}</p>
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

function RenderCartItem({ item }: { item: OrderItem }) {
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
              backgroundImage: `url(${item.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="col-6">
            <p>{item.product_name}</p>
            <p>{formatCurrency(item.amount)}</p>
          </div>
        </div>
      </td>
      <td>
        <div></div>
      </td>
      <td>{formatCurrency(item.amount * item.quantity)}</td>
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
