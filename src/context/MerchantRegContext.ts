import { createContext } from "react";
import { Merchant } from "../common/models/Merchant";
import { sampleMerchant } from "../utilities/dummyData/merchant";

export const MerchantRegContext = createContext<{
  bio: Merchant;
}>({ bio: sampleMerchant });
