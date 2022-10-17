import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import './scss/style.scss'


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const Users = React.lazy(() => import('./views/pages/users/Users'))
const UserInterface = React.lazy(() => import ('./views/dashboard/userInterface'))
const TableData = React.lazy(() => import ('./views/pages/tasks/Tasks'))


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
      
          <Routes>
            <Route  path="/" name="Login Page" element={<Login />} />
            <Route  exact path="/register" name="Register Page" element={<Register />} />
            <Route  exact path="/404" name="Page 404" element={<Page404 />} />
            <Route  exact path="/500" name="Page 500" element={<Page500 />} />
            <Route  exact path="*" name="Home" element={<DefaultLayout />} />
            <Route  exact path="/users" name="Users" element={<Users />} />
            <Route  exact path="/user" name="User" element={<UserInterface />} />
            <Route  exact path="/tasks" name="Tasks" element={<TableData />} />
          </Routes>
         </Suspense>
       </HashRouter>
    )
  }
}

export default App
