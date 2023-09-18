import { Outlet, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./RootLayout";
import { LoginPage } from "../modules/login/pages/LoginPage";
import { SignUpLandingPage } from "../modules/signup/pages/SignUpLandingPage";

export enum ROUTES {
  ROOT = "/",
  LOGIN = "login",
  SIGNUP = "signup",
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
      {
        path: ROUTES.SIGNUP,
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <SignUpLandingPage />,
          },
        ],
      },
    ],
  },
]);
