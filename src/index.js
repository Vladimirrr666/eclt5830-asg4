/**
 * ECLT5830 Network and Web Programming
 *
 * I declare that the assignment here submitted is original
 * except for source material explicitly acknowledged,
 * and that the same or closely related material has not been
 * previously submitted for another course.
 * I also acknowledge that I am aware of University policy and
 * regulations on honesty in academic work, and of the disciplinary
 * guidelines and procedures applicable to breaches of such
 * policy and regulations, as contained in the website.
 *
 * University Guideline on Academic Honesty:
 * http://www.cuhk.edu.hk/policy/academichonesty/
 *
 * Student Name : LinQiao
 * Student ID : 1155185447
 * Date : 2022/12/02
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // include bootstrap
import "./index.css";
import App from "./App";
import Home from "./pages/Home/index";
import Post from "./pages/Post/index";
import MessageBoard from "./pages/MessageBoard/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "posts/:postId",
        element: <Post />,
      },
      {
        path: "message-board",
        element: <MessageBoard />,
      },
    ],
  },
  {
    path: "*",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    <RouterProvider router={router} />
);
