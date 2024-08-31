import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/app_layout';
import Landing from './pages/landing';
import Onboarding from './pages/onboarding';
import './App.css'

const router = createBrowserRouter([{
  element: <AppLayout />,
  children: [
    {
      path: "/",
      element: <Landing />
    },
    {
      path: "/onboarding",
      element: <Onboarding />
    }
  ]
}]);
function App() {
  return (
   <RouterProvider router={router} />
  )
}

export default App
