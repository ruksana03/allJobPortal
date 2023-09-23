import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/JobDetails/JobDetails';
import AllJobs from './components/AllJobs/AllJobs';
import Blogs from './components/Blogs/Blogs';
import BlogDetails from './components/BlogDetails/BlogDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader : () =>fetch('../jobs.json')
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader : () =>fetch('../jobs.json')
      },
      {
        path: '/jobs',
        element: <AllJobs></AllJobs>,
        loader : () =>fetch('../jobs.json')
      },
      {
        path: '/blogs',
        element:<Blogs></Blogs> ,
        loader : () =>fetch('../blogs.json')
      },
      {
        path: '/blog/:id',
        element:<BlogDetails></BlogDetails> ,
        loader : () =>fetch('../blogs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)