import { GetServerSidePropsContext } from "next";
import { getHomePage, getPageData } from "../lib";
import { PageTitle } from "../ui/organisms/PageTitle";
import { AppTemplate } from "../ui/templates/AppTemplate";

export default function RefundPolicy() {
  return (
    <div>
      <AppTemplate>
        <PageTitle title="Refund policy"></PageTitle>
      </AppTemplate>
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
