import { useEffect } from "react";
export const useTitle = (title: string) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `SWAP | ${title}`;
    return () => {
      document.title = prevTitle;
    };
  });
};
