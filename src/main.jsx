import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <h1>reports</h1>,
      },
      {
        path: "products",
        element: <h1>reports</h1>,
      },
      {
        path: "reports",
        element:<h1>reports</h1> ,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
 <RouterProvider router={router}>
 <React.StrictMode>
    <App />
  </React.StrictMode>
  </RouterProvider>
);
