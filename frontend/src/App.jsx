import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import './App.css'
import Cards from './pages/Cards'
import UpdateContact from './pages/UpdateContact'
// import Crud from './pages/Crud'
const App = () => {
  let myRouter = createBrowserRouter([
    {
        path : "/",
        element : <Layout/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "cards",
                element : <Cards/>
            },
            {
                path : "update/:id",
                element : <UpdateContact/>
            },

            {
                path : "login",
                element : <Login/>
            },
            {
                path : "signup",
                element : <SignUp/>
            },

        ]
    }
  ]);
  return <RouterProvider router={myRouter}/>
}

export default App