import { RootContext } from "../context/RootContext";
import { useState } from "react";
import { LoginPage } from "../models/login/pages/LoginPage";

export const RootLayout = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationHeader, setNotificationHeader] = useState("");
  const [notificationCopy, setNotificationCopy] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      }}
    >
      <>{isLoggedIn ? <p>Hello World</p> : <LoginPage />}</>
    </RootContext.Provider>
  );
};
