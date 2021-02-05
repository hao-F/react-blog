// import React from 'react'
import {BrowserRouter, Route } from 'react-router-dom'
import login from '../pages/login/login'
import home from '../pages/home/home'
import s1 from '../pages/system/s1'
import s2 from '../pages/system/s2'
import base from '../layout/index'

 const router = () => (
  <BrowserRouter>
    <Route path="/" component={base}>
      <Route path="/home" component={home} />
      <Route path="/s1" component={s1} />
      <Route path="/s2" component={s2} />
    </Route>
    <Route path="/login" component={login}></Route>
  </BrowserRouter>
)

export default router
