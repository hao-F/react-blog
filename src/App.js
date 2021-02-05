import React from 'react'
// import { Provider } from 'react-redux'
import {BrowserRouter, Redirect, Route } from 'react-router-dom'
// import store from "./store";
import Base from './layout/index'
import login from './pages/login/login'

class App extends React.Component {
  render() {
    return (
      // <Provider store={store}>
        <BrowserRouter>
          <Route to="/" r>
            <Route path="/index" component={Base} />
            <Redirect from="/" to="/index"/>
          </Route>
          <Route path="/login" component={login} />
        </BrowserRouter>
      // </Provider>
    )
  }
}

export default App;
