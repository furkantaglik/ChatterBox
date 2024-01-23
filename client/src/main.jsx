import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home.jsx";
import ErrorPage from "./error-page.jsx";
import SignInPage from "./routes/Sign-in.jsx";
import SignUpPage from "./routes/Sign-up.jsx";
import Layout from "./components/Layout.jsx";
import Chat from "./routes/Chat.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MessageList from "./components/MessageList.jsx";
import PeopleList from "./components/PeopleList.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Clerk Key Bulunamadı");
}

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
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
