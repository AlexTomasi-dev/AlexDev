
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Pag1 from "./components/pag1.jsx";
import Pag2 from './components/pag2.jsx';

import "./stile/main.css"




const router = createBrowserRouter([
  {
    path:"/",
    element: <Pag1></Pag1>
  },
  {
    path:"/pag2",
    element: <Pag2></Pag2>
  },
  
])



ReactDOM.createRoot(document.getElementById('mio-sito')).render(
  <React.StrictMode>
 
      <RouterProvider router={router}></RouterProvider>
   
  </React.StrictMode>
)
