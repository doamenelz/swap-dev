import { createContext } from "react";

export const PageLayoutContext = createContext<{
  pageTitle: string;
  setPageTitle: Function;
}>;
