import React from 'react'
import {BrowserRouter, Redirect, Route } from 'react-router-dom'
import Base from './layout/index'
import login from './pages/login/login'
import './common/common.scss'


class App extends React.Component {
  render() {
    return (
      // <Provider store={store}>
      <div className="container">
        <BrowserRouter>
          <Route to="/">
            <Route path="/index" component={Base} />
            <Redirect from="/" exact to="/index"/>
          </Route>
          <Route path="/login" component={login} />
        </BrowserRouter>
      </div>
      // </Provider>
    )
  }
}

export default App;
