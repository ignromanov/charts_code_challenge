import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import Routing from './routing';
import SiderMenu from './component/SiderMenu';
import logo from './logo.svg';

const { Header, Content, Sider } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header className="site-header">
          <img src={logo} className="App-logo" alt="logo" />
        </Header>
        <Layout className="site-layout">
          <Sider width={200} className="site-sider"><SiderMenu /></Sider>
          <Content className="content-layout"><Routing /></Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
