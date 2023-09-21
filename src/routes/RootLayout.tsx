import { RootContext } from "../context/RootContext";
import { useState } from "react";
import { LoginPage } from "../modules/login/pages/LoginPage";
import { SignUpLandingPage } from "../modules/signup/pages/SignUpLandingPage";
import { Outlet } from "react-router";
import { Merchant } from "../common/models/Merchant";
import { sampleMerchant } from "../utilities/dummyData/merchant";
import { TopNotification } from "../common/components/TopNotification";

export const RootLayout = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationHeader, setNotificationHeader] = useState("");
  const [notificationCopy, setNotificationCopy] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [merchant, setMerchant] = useState<Merchant>(sampleMerchant);
  const [notificationStatus, setNotificationStatus] = useState(false);

  return (
    <RootContext.Provider
      value={{
        showNotification: showNotification,
        toggleNotification: setShowNotification,
        notificationHeader: notificationHeader,
        setNotificationHeader: setNotificationHeader,
        setNotificationCopy: setNotificationCopy,
        notificationCopy: notificationCopy,
        notificationStatus: notificationStatus,
        setNotificationStatus: setNotificationStatus,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
        merchant: merchant,
        setMerchant: setMerchant,
      }}
    >
      <>
        <Outlet />
        <div className="fixed z-50">
          <TopNotification />
        </div>
      </>
    </RootContext.Provider>
  );
};
