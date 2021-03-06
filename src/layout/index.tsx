import React, {Component} from 'react'
import './layout.scss'
import { Route, Link } from 'react-router-dom'
import home from '../pages/home/index'
import user from '../pages/set/user'

import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

interface states {
  theme: string,
  current: string,
}


export default class layout extends Component {
  state: states = {
    theme: 'dark',
    current: '1',
  };

  handleClick = (e: any) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline">
            
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/index/home">主页</Link>
            </Menu.Item>

            <Menu.SubMenu key="sub1" title="设置">
              <Menu.Item key="2" icon={<SettingOutlined />}>
                <Link to="/index/user">用户管理</Link>
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
              <Route exact path="/index/home" component={home}/>
              <Route exact path="/index/user" component={user}/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>番号无限公司</Footer>
        </Layout>
      </Layout>
    )
  }
}
