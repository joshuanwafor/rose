import { GetServerSidePropsContext } from "next";
import { AppTemplate } from "../ui/templates/AppTemplate";
import { getHomePage, getPageData } from "../lib";

export default function Checkout() {
  return (
    <div>
      <AppTemplate>
        <div>
          <h3>Page title</h3>
          <p>caption goes here</p>
        </div>
      </AppTemplate>
    </div>
  );
}


export async function getServerSideProps({ req, res, resolvedUrl, params }: GetServerSidePropsContext) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const origin = req.headers.host;
  return {
    props: getHomePage(origin)// will be passed to the page component as props
  }
}