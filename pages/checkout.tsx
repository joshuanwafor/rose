import { GetServerSidePropsContext } from "next";
import { AppTemplate } from "../ui/templates/AppTemplate";
import { getHomePage, getPageData } from "../lib";
import { PageTitle } from "../ui/organisms/PageTitle";
import { formatCurrency } from "../lib/utils";
import { cartManager } from "../src/store/cart";
import { MainBody } from "../ui/organisms/MainBody";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { OrderItem, PublishUserOrderDto } from "../src/sdk/storefront";
import { useForm } from "react-hook-form";
import { pageDataManager } from "../src/store/pageData";
import { InitCheckout } from "../ui/organisms/checkout/InitCheckout";

export default function Checkout() {
 

  return (
    <div>
      <AppTemplate>
        <PageTitle
          title="Checkout"
          right={
            <a
              style={{ textAlign: "right", textDecoration: "underline" }}
              href="/catalog"
            >
              Continue shopping
            </a>
          }
        ></PageTitle>
        <MainBody>
          <div>
            <Row>
              <Col md={6}>
                <InitCheckout />
              </Col>

              <Col
                md={6}
                style={{
                  padding: 24,
                  backgroundColor: "ghostwhite",
                  borderRadius: 24,
                }}
              >
                <div>Items</div>
                {cartManager.cart.map((item) => {
                  return <RenderCartItem item={item} />;
                })}
                <div>
                  Subtotal: {formatCurrency(cartManager.getCartTotal())}
                </div>
              </Col>
            </Row>
          </div>
        </MainBody>
      </AppTemplate>
    </div>
  );
}

function RenderCartItem({ item }: { item: OrderItem }) {
  return (
    <div>
      <div className="row my-2">
        <div
          className="col-6"
          style={{
            backgroundColor: "gray",
            width: "50px",
            height: "50px",
            backgroundImage: `url(${item.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: 8,
          }}
        ></div>
        <div className="col-6">
          <p>{item.product_name}</p>
          <p>{formatCurrency(item.amount)}</p>
        </div>
      </div>
    </div>
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
