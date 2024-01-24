import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home.jsx";
import ErrorPage from "./error-page.jsx";
import SignInPage from "./routes/Sign-in.jsx";
import SignUpPage from "./routes/Sign-up.jsx";
import Layout from "./components/Layout.jsx";
import Chat from "./routes/Chat.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MessageList from "./components/MessageList.jsx";
import PeopleList from "./components/PeopleList.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chat/:id",
        element: <Chat />,
      },
      {
        path: "/messages",
        element: <MessageList />,
      },
      {
        path: "/users",
        element: <PeopleList />,
      },

      { path: "/sign-in", element: <SignInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
