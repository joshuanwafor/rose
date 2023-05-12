import { GetServerSidePropsContext } from "next";
import { getHomePage, getPageData } from "../lib";
import { AppTemplate } from "../ui/templates/AppTemplate";
import { PageTitle } from "../ui/organisms/PageTitle";
import { MainBody } from "../ui/organisms/MainBody";
import { useEffect } from "react";
import { authManager } from "../src/store/auth";
import { observer } from "mobx-react";
import { Button } from "react-bootstrap";

export default observer(function Account() {
  useEffect(() => {
    authManager.init();
  }, []);
  return (
    <div>
      <AppTemplate>
        <PageTitle
          title="My Account"
          right={
            //@ts-ignore
            authManager.user.email == undefined ? undefined : (
              <Button
                variant=""
                onClick={() => {
                  authManager.signout();
                }}
              >
                Logout
              </Button>
            )
          }
        ></PageTitle>
        <MainBody>
          <div className="p-3 border">
            {
              //@ts-ignore
              authManager.user.email == undefined ? (
                <Button
                  className="text-center"
                  onClick={() => {
                    authManager.signin();
                  }}
                >
                  Signin with google
                </Button>
              ) : (
                <p>My Account</p>
              )
            }
          </div>
        </MainBody>
      </AppTemplate>
    </div>
  );
});
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
