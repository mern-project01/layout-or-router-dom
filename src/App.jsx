import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import Fetch from "./component/Fetch";
import Loader from "./component/Loader/Loader";
import LoaderSingleCardDeteails from "./component/Loader/LoaderSingleCardDeteails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Fetch></Fetch>,
        },
        {
          path: "/loader",
          element: <Loader></Loader>,
          loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        },
        {
          path: '/loader-deails/:id',
          loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
          element:<LoaderSingleCardDeteails></LoaderSingleCardDeteails>
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
