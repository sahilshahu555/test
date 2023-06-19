import React from 'react'
import { PrivateRoute } from './PrivateRoute';
import { Route, Routes } from 'react-router-dom';

import { Dashboard } from '../Pages/Dashboard';
import { Login } from '../Pages/Login';
import { Home } from '../Pages/Home';
import { SingleRoom } from '../Pages/SingleRoom';

export const AllRoutes = () => {
  return <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard/:id' element={<PrivateRoute><SingleRoom/></PrivateRoute>}/>
       <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
    </Routes>
  </div>;
}
