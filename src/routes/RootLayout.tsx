import { RootContext } from "../context/RootContext";
import { useState } from "react";
import { LoginPage } from "../modules/login/pages/LoginPage";
import { SignUpLandingPage } from "../modules/signup/pages/SignUpLandingPage";
import { Outlet } from "react-router";
import { Merchant } from "../common/models/Merchant";
import { sampleMerchant } from "../utilities/dummyData/merchant";

export const RootLayout = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationHeader, setNotificationHeader] = useState("");
  const [notificationCopy, setNotificationCopy] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [merchant, setMerchant] = useState<Merchant>(sampleMerchant);

  return (
    <RootContext.Provider
      value={{
        showNotification: showNotification,
        toggleNotification: setShowNotification,
        notificationHeader: notificationHeader,
        setNotificationHeader: setNotificationHeader,
        setNotificationCopy: setNotificationCopy,
        notificationCopy: notificationCopy,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
        merchant: merchant,
        setMerchant: setMerchant,
      }}
    >
      <>
        <Outlet />
      </>
    </RootContext.Provider>
  );
};
