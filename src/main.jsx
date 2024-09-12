import ReactDOM from 'react-dom/client'
import React from 'react';
import {
  createBrowserRouter,RouterProvider
} from "react-router-dom";
import './index.css'
import Chartii from './Pages/Hero/Chartii.jsx';
import Hero from './Pages/Hero/Hero';
import Page1 from './Pages/Page1/Page1.jsx';


const router = createBrowserRouter([
  { path: "/",element: <Hero />,},
  { path: "/input", element: <Chartii/>},
  { path: "/select", element: <Page1/>},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
