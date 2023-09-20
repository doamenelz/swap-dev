import React from "react";
import { Merchant } from "../common/models/Merchant";
import { sampleMerchant } from "../utilities/dummyData/merchant";

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
  merchant: Merchant;
  setMerchant: Function;
}>({
  showNotification: false,
  toggleNotification: () => {},
  notificationHeader: "",
  setNotificationHeader: () => {},
  merchant: sampleMerchant,
  setMerchant: () => {},
});
