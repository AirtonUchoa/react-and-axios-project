import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Elaborando o Router para as páginas
// Para criar um router, não se esqueça de instalar o react-router pelo. 

import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"

// páginas
import Home from "./routes/Home";
import NewPost from "./routes/NewPost";
import Post from "./routes/Posts";

import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/new",
        element: <NewPost/>,
      },
      {
        path: "/posts/:id",
        element: <Post />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
