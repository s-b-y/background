import  { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  PieChartOutlined,
  FileOutlined,
  ProjectOutlined,
  BankOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Route,useHistory } from "react-router-dom";
import Dashboard from "./Dashboard";
import Products from "./Products";
import ProductCategories from "./Products/Categories";
import Users from "./Users";
import Orders from "./Users/Orders";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Main() {
  const [collapsed, serCollapsed] = useState(false);
  const{push} =useHistory();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => serCollapsed(!collapsed)}
      >
        <div className="logo">BY</div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" onClick={({key})=>{
          push(key)
        }}>
          <Menu.Item key="/admin/dashboard" icon={<PieChartOutlined />}>
            看板
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="用户管理">
            <Menu.Item key="/admin/users">用户信息</Menu.Item>
            <Menu.Item key="/admin/orders">订单管理</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<ProjectOutlined />} title="商品管理">
            <Menu.Item key="/ad,in/produst">商品分类</Menu.Item>
            <Menu.Item key="8">商品信息</Menu.Item>
          </SubMenu> 
          <SubMenu key="sub2" icon={<BankOutlined />} title="轮播图">
            <Menu.Item key="6">轮播图分类</Menu.Item>
            <Menu.Item key="8">轮播图信息</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "8px 16px" }}>
          <Route path="/admin/dashboard">
          <Dashboard />
          </Route>
          <Route path="/admin/users">
            <Users />
          </Route>
          <Route path="/admin/orders">
            <Orders />
          </Route>
          <Route path="/admin/product_categories">
            <ProductCategories />
          </Route>
          <Route path="/admin/products">
            <Products />
          </Route>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 by TG 江东出版
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Main;
