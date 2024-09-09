import ReactDOM from 'react-dom/client'
import React from 'react';
import {
  createBrowserRouter,RouterProvider
} from "react-router-dom";
import './index.css'
import Hero from './Components/Hero/Hero.jsx';
import Chartii from './Components/Hero/Chartii.jsx';

const router = createBrowserRouter([
  { path: "/",element: <Hero />,},
  { path: "/input", element: <Chartii/>},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
