import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts, { loader as postLoader } from "./routes/Posts.jsx";
import NewPost, { action as newPostAction } from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import PostDetails, {
  loader as postDetailsLoader,
} from "./routes/PostDetails.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: newPostAction },
          { path: "/:id", element: <PostDetails />, loader: postDetailsLoader },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
