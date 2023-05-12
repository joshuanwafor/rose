import Head from "next/head";
import Script from "next/script";
import {
  RenderFeaturedProducts,
  RenderProductsMin,
} from "../../ui/sections/RenderProductsMin";
import { AppTemplate } from "../../ui/templates/AppTemplate";
import {
  CollectionControllerApi,
  ProductControllerApi,
} from "../../src/sdk/storefront";
import { GetServerSidePropsContext } from "next";
import { getPageData, getProductPage } from "../../lib";
import { pageDataManager } from "../../src/store/pageData";
import { cartManager } from "../../src/store/cart";
import { formatCurrency } from "../../lib/utils";
import { observer } from "mobx-react";

export default observer( function ViewProduct() {
  let { cost_price, sale_price, image } = pageDataManager.product;
  return (
    <AppTemplate>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <img src={pageDataManager.product.image} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h1>{pageDataManager.product.title}</h1>
            <div className="my-2">
              <span style={{ fontSize: 24 }}>{formatCurrency(sale_price)}</span>
            </div>
            <div>
              <span>{}</span>
              <span></span>
            </div>
            <div className="my-2">
              <button
                className="btn btn-primary btn-lg w-100"
                onClick={() => {
                  cartManager.addItem(pageDataManager.product);
                }}
              >
                Add to cart
              </button>
              <button className="btn btn-lg  border w-100 my-2">Buy now</button>
            </div>
            <p className="my-2">{pageDataManager.product.summary}</p>
          </div>
        </div>
      </div>

      <RenderFeaturedProducts />
    </AppTemplate>
  );
})

export async function getServerSideProps({
  req,
  res,
  params,
}: GetServerSidePropsContext) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const origin = req.headers.host;
  return {
    //@ts-ignore
    props: getProductPage(origin, params.id),
  };
}
