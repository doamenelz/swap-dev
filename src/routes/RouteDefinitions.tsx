import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./RootLayout";
import { LoginPage } from "../models/login/pages/LoginPage";

export enum ROUTES {
  ROOT = "/",
  LOGIN = "/login",
}

export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <RootLayout />,
    children: [
      { index: true, element: <LoginPage /> },
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
    ],
  },
]);
