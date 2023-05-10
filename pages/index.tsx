import Head from "next/head";
import Script from "next/script";
import { CollectionSlider } from "../ui/sections/CollectionsSlider";
import { FeaturedCollections } from "../ui/sections/FeaturedCollections";
import { FeaturedProduct } from "../ui/sections/FeaturedProduct";
import { RenderProductsMin } from "../ui/sections/RenderProductsMin";
import { SiteCover } from "../ui/sections/SiteCover";
import { AppTemplate } from "../ui/templates/AppTemplate";
import { GetServerSidePropsContext } from "next";
import {
  CollectionControllerApi,
  ProductControllerApi,
  SiteControllerApi,
} from "../src/sdk/storefront";
import { pageDataManager } from "../src/store/pageData";
import { getHomePage, getPageData } from "../lib";

export default function Home(props) {
  return (
    <AppTemplate>
      <SiteCover />
      <FeaturedCollections />
      <RenderProductsMin />
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
    props: getHomePage(origin), // will be passed to the page component as props
  };
}
