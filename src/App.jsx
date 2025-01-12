
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './layout/Main'
import Fetch from './component/Fetch'
import Loader from './component/Loader/Loader'

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
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
        
    </>
  )
}

export default App
