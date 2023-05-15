import { GetServerSidePropsContext } from "next";
import { getHomePage, getPageData } from "../lib";
import { AppTemplate } from "../ui/templates/AppTemplate";
import { PageTitle } from "../ui/organisms/PageTitle";
import { MainBody } from "../ui/organisms/MainBody";
import { useEffect } from "react";
import { authManager } from "../src/store/auth";
import { observer } from "mobx-react";
import { Button, Col, Row } from "react-bootstrap";
import { AccountAuth } from "../ui/organisms/auth/AccountAuth";
import { RenderOrders } from "../ui/organisms/order-widgets/RenderOrders";

export default observer(function Account() {
  return <Main />;
});

const Main = observer(() => {
  useEffect(() => {
    authManager.init();
  }, []);

  if (authManager.profile?.id == undefined) {
    return (
      <AppTemplate>
        <PageTitle title="My Account"></PageTitle>
        <MainBody>
          <Row>
            <Col md={6}>
              <div className="border p-3" style={{borderRadius: 4}}>
              <AccountAuth />
              </div>
            </Col>
          </Row>
        </MainBody>
      </AppTemplate>
    );
  }

  let profile = authManager.profile;
  return (
    <div>
      <AppTemplate>
        <PageTitle
          title="My Account"
          right={
            //@ts-ignore
            authManager?.profile?.id == undefined ? undefined : (
              <Button
                variant=""
                onClick={() => {
                  authManager.logout();
                }}
              >
                Logout
              </Button>
            )
          }
        ></PageTitle>
        <MainBody>
          <Row>
            <Col md={6} className="my-2">
              <div className="p-3 border">
                <h4>Profile info</h4>
                <p>
                  {profile.first_name} {profile.last_name}
                  <br />
                  {profile.email}
                  <br />
                  {profile.phone}
                </p>
              </div>
            </Col>
            <Col md={6} className="my-2">
              <div className="p-3 border">
                <h4>My orders</h4>
                <RenderOrders />
              </div>
            </Col>
          </Row>
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
