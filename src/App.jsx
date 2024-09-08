import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Slider } from './Components/Slider.jsx';
import { ProductPage } from './Pages/ProductPage.jsx';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Slider />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/home",
    element: <Slider />,
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
