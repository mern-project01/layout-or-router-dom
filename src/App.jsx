
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './layout/Main'
import Fetch from './component/Fetch'

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element:<Fetch></Fetch>
      },
    ]
}])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
        
    </>
  )
}

export default App
