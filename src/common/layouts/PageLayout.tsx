import { FC } from "react";
import { useTitle } from "../../hooks/usePageTitle";

export const PageLayout: FC<{
  children: React.ReactNode;
  pageTitle: string;
}> = ({ children, pageTitle }) => {
  useTitle(pageTitle);
  return <div className="bg-gray-25 overscroll-contain">{children}</div>;
};
