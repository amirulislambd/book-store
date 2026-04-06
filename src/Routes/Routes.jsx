import { createBrowserRouter } from "react-router";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Pages/Home/Home";
import Error from "../components/Pages/Error/Error";
import BookDetails from "../components/Pages/Books/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "/bookDetails/:id",
        loader: ()=>fetch("/booksData.json"),
        Component: BookDetails,
      },
    ],
    errorElement: <Error />,
  },
]);
