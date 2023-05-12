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
import Main from './Pages/main.js'
import AlFatiha from "./Pages/001"
import AlBaqara from "./Pages/002"
import AlImran from './Pages/003'
import AlNisaa from './Pages/004'
import AlMaada from './Pages/005'
import AlAnaam from './Pages/006'
import AlAaraf from './Pages/007'

// React Content
// -------------------------
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: 
    <h1 style={{
      backgroundColor: "whitesmoke" , 
      height : '100vh' ,
      margin: '0' ,
      display: 'flex' ,
      justifyContent: 'center' ,
      alignItems: 'center' ,
      color: 'white' ,
      textShadow: '1px 1px 10px black' ,
      fontSize: '30px'
      }}>
      Page Not Found
    </h1>
  },
  {
    path: "/001",
    element: <AlFatiha />,
  },
  {
    path: "/002",
    element: <AlBaqara />
  },
  {
    path: "/003",
    element: <AlImran />
  },
  {
    path: "/004",
    element: <AlNisaa />
  },
  {
    path: "/005",
    element: <AlMaada />
  },
  {
    path: "/006",
    element: <AlAnaam />
  },
  {
    path: "/007",
    element: <AlAaraf />
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