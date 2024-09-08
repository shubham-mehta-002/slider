import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Sliderr } from './Components/Sliderr.jsx';
import { ProductPage } from './Pages/ProductPage.jsx';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Sliderr />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/home",
    element: <Sliderr />,
  },
]);

function App() {
  return (
    <div>
       <RouterProvider router={routes} ></RouterProvider>
    </div>
  )
}

export default App
