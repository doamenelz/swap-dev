import React from "react";

export const RootContext = React.createContext<{
  showNotification: boolean;
  toggleNotification: Function;
  notificationType?: boolean;
  setNotificationType?: Function;
  notificationHeader: string;
  setNotificationHeader: Function;
  notificationCopy?: string;
  setNotificationCopy?: Function;
  isLoading?: boolean;
  setIsLoading?: Function;
}>({
  showNotification: false,
  toggleNotification: () => {},
  notificationHeader: "",
  setNotificationHeader: () => {},
});
