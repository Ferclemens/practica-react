import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import Api from './components/Api.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path:'/api',
    element: <Api/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router}/>
    </ThemeContextProvider>
  </React.StrictMode>,
)
