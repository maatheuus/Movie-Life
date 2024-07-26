import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import TvShows from "./pages/TvShows";
import DetailsPage from "./pages/DetailsPage";
import SearchPage from "./pages/SearchPage";
import AppLayout from "./pages/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":explore",
        element: <Explore />,
      },
      {
        path: ":explore/:id",
        element: <DetailsPage />,
      },
      // {
      //   path: "/tv",
      //   element: <TvShows />,
      // },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
