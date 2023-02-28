import React, { useState, useEffect, Suspense, lazy } from "react";
import { Tabs } from "components/ui";
import { AdaptableCard, Container } from "components/shared";
import { useNavigate, useLocation } from "react-router-dom";
import { useRouter } from "next/router";
import isEmpty from "lodash/isEmpty";
import { apiGetAccountSettingData } from "services/AccountServices";
// import async from "react-select/dist/declarations/src/async/index";
import dynamic from "next/dynamic";
const Profile = dynamic(() => import("./components/Profile"));
const Password = dynamic(() => import("./components/Password"));
const NotificationSetting = dynamic(() =>
  import("./components/NotificationSetting")
);
const Integration = dynamic(() => import("./components/Integration"));
const Billing = dynamic(() => import("./components/Billing"));

const { TabNav, TabList } = Tabs;

const settingsMenu = {
  profile: { label: "Profile", path: "profile" },
  password: { label: "Password", path: "password" },
  notification: { label: "Notification", path: "notification" },
  integration: { label: "Integration", path: "integration" },
  billing: { label: "Billing", path: "billing" },
};

const Settings = () => {
  const [currentTab, setCurrentTab] = useState("profile");
  const [data, setData] = useState({});

  const navigate = useRouter();

  const location = useRouter();

  const path = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );

  const onTabChange = (val) => {
    setCurrentTab(val);
    navigate.push(`/app/account/settings/${val}`);
  };

  const fetchData = async () => {
    const response = await apiGetAccountSettingData();
    setData(response.data);
  };

  useEffect(() => {
    setCurrentTab(path);
    if (isEmpty(data)) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <AdaptableCard>
        <Tabs value={currentTab} onChange={(val) => onTabChange(val)}>
          <TabList>
            {Object.keys(settingsMenu).map((key) => (
              <TabNav key={key} value={key}>
                {settingsMenu[key].label}
              </TabNav>
            ))}
          </TabList>
        </Tabs>
        <div className="px-4 py-6">
          <Suspense fallback={<></>}>
            {currentTab === "profile" && <Profile data={data.profile} />}
            {currentTab === "password" && <Password data={data.loginHistory} />}
            {currentTab === "notification" && (
              <NotificationSetting data={data.notification} />
            )}
            {currentTab === "integration" && <Integration />}
            {currentTab === "billing" && <Billing />}
          </Suspense>
        </div>
      </AdaptableCard>
    </Container>
  );
};

export default Settings;
