import React from 'react'
import {BrowserRouter, Route } from 'react-router-dom'
import Base from './layout/index'
import login from './pages/login/login'
import './common/common.scss'


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Route to="/">
            <Route path="/index" component={Base} />
          </Route>
          <Route path="/login" component={login} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
