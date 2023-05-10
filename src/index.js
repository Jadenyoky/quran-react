// React Imports ( Libraries and Frameworks )
// -------------------------
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// React Imports ( CSS )
// -------------------------
import "./CSS/index.css";

// React Imports ( Components and Pages )
// -------------------------
import App from "./Pages/App";
import Error from "./Pages/error.js" 

// React Content
// -------------------------
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);