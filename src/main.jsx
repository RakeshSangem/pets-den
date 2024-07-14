// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import Login from "./routes/Login";
import Pets from "./routes/Pets";
import AddPet from "./routes/Addpet";
import PrivateRoute from "./routes/PrivateRoute";
import EditPet from "./routes/EditPet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/pets",
            element: <Pets />,
          },
          {
            path: "/add-pet",
            element: <AddPet />,
          },
          {
            path: "/edit-pet",
            element: <EditPet />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
