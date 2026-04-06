import { createBrowserRouter } from "react-router";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Pages/Home/Home";
import Error from "../components/Pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [{ index: true, Component: Home }],
    errorElement: <Error/>
  },
]);
