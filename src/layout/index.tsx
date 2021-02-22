import React, {Component} from 'react'
import './layout.css'
import { Route, Link } from 'react-router-dom'
import home from '../pages/home/home'


export default class layout extends Component {


  render() {
    return (
      <div className="bgc">
        <Link to="/index/home">主页</Link>
        <Link to="/login">登录</Link>

        <Route exact path="/index/home" component={home}/>
        
      </div>

    )
  }
}
