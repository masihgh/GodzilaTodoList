import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './pages/Home'
import History from './pages/History';
import Members from './pages/Members';
import './assets/App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "history/",
    element: <History />,
  },{
    path: "members/",
    element: <Members />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
