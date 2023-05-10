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

export default function ViewProduct() {
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
              <span style={{fontSize:24}}>$100,000</span>
              <span className="badge">Sale</span>
            </div>
            <div className="my-2">
              <button className="btn btn-primary btn-lg w-100">
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
}

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
