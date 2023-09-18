import { RouterProvider } from "react-router-dom";
import { router } from "./routes/RouteDefinitions";
import { useState, useEffect } from "react";
import React from "react";
// import useBreadcrumbs from "use-react-router-breadcrumbs";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
