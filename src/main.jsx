import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/root/Root';
import ErrorShow from './Component/errorpage/ErrorShow';
import Navbar from './Component/Navbar/Navbar';
import ListedBooks from './Component/listedBooks/ListedBooks';
import PagesToRead from './Component/pagesToRead/PagesToRead';
import Home from './Component/home/Home';
import BookDetails from './Component/bookDetails/BookDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorShow></ErrorShow>,
    children:[
      {
        path:'/navbar',
        element:<Navbar></Navbar>
      },
      {
        path:'/listedBooks',
        element:<ListedBooks></ListedBooks>
      },
      {
        path:'/pagesToRead',
        element:<PagesToRead></PagesToRead>
      },
      {
        path:'/',
        loader:() => fetch('/public/booksData.json'),
        element:<Home></Home>
      },
      {
        path:'/book/:bookId',
        loader:() => fetch('/public/booksData.json'),
        element:<BookDetails></BookDetails>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
