import ReactDOM from 'react-dom/client'
import React from 'react';
import {
  createBrowserRouter,RouterProvider
} from "react-router-dom";
import './index.css'
import Chartii from './Pages/Hero/Chartii.jsx';
import Hero from './Pages/Hero/Hero';


const router = createBrowserRouter([
  { path: "/",element: <Hero />,},
  { path: "/input", element: <Chartii/>},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
