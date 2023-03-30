import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store'
import { Provider } from 'react-redux'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './pages/Home'
import History from './pages/History';
import Members from './pages/Members';
import './assets/App.css'
import Auth from './pages/Auth';

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
  },{
    path: "auth/",
    element: <Auth />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
