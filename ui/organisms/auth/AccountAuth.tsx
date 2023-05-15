import { Col, Row } from "react-bootstrap";
import { AccountLogin } from "./AccountLogin";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { AccountSignup } from "./AccountSignup";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";

export function AccountAuth() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className={"d-flex"}>
          <Tab
            className={"p-3 py-2"}
            style={{
              border: tabIndex == 0 ? "2px solid black" : undefined,
              borderRadius: 4,
            }}
          >
            Log in
          </Tab>
          <Tab
            className={"p-3 py-2"}
            style={{
              border: tabIndex == 1 ? "2px solid black" : undefined,
              borderRadius: 4,
            }}
          >
            Create account
          </Tab>
        </TabList>
        <TabPanel className={"mt-4"}>
          <AccountLogin />
        </TabPanel>
        <TabPanel className={"mt-4"}>
          <AccountSignup />
        </TabPanel>
      </Tabs>

      <Row className="justify-content-center"></Row>
    </div>
  );
}
