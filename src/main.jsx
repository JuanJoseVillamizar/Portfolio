import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/about/About.jsx';
import Resume from './pages/resume/resume.jsx';
import Projects from './pages/projects/Projects.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
      path: "/",
      element: <About/>,
      },
      {
        path: "/resume",
        element: <Resume/>,
      },
      {
        path: "/project",
        element: <Projects/>,
      },
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
