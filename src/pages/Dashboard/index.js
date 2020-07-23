import React, { useState } from "react";
import {} from "antd";
import { Layout, Menu, Breadcrumb, Avatar } from "antd";
import {
  VideoCameraOutlined,
  SettingOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import {
  Container,
  Content,
  CardContainer,
  ContainerMenu,
  Siderbar,
  Profile,
  Header,
  HideMenu,
} from "./styles";

import Clients from "./Clients";
import Edit from "./Clients/Edit";
import Register from "./Clients/Register";
import Home from "./Home";

const { Footer } = Layout;
const { SubMenu } = Menu;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [dashContent, setDashContent] = useState("home");

  const content = (dashContent) => {
    switch (dashContent) {
      case "clients:1":
        return <Clients />;
      case "clients:2":
        return <Edit />;
      case "clients:3":
        return <Register />;
      default:
        return <Home />;
    }
  };

  return (
    <Container>
      <Header className="layout-background" style={{ padding: 0 }}>
        <HideMenu>
          <MenuOutlined onClick={() => setCollapsed(!collapsed)} />
        </HideMenu>
        <Profile>
          <Avatar icon={<UserOutlined />} />
          <div>
            <h1>Bem Vindo</h1>
            <h3>Cleverson Fernandes</h3>
          </div>
        </Profile>
      </Header>
      <Layout>
        <Siderbar
          collapsed={collapsed}
          breakpoint="lg"
          onBreakpoint={(broken) => {
            setCollapsed(broken);
          }}
        >
          <ContainerMenu mode="inline" defaultSelectedKeys={["home"]}>
            <Menu.Item
              key="home"
              onClick={({ key }) => setDashContent(key)}
              icon={<VideoCameraOutlined />}
            >
              Inicio
            </Menu.Item>
            <SubMenu icon={<SettingOutlined />} title="Clientes">
              <Menu.Item
                key="clients:1"
                onClick={({ key }) => setDashContent(key)}
              >
                Ver Todos
              </Menu.Item>
              <Menu.Item
                key="clients:2"
                onClick={({ key }) => setDashContent(key)}
              >
                Editar
              </Menu.Item>
              <Menu.Item
                key="clients:3"
                onClick={({ key }) => setDashContent(key)}
              >
                Cadastrar
              </Menu.Item>
            </SubMenu>
          </ContainerMenu>
        </Siderbar>
        <Layout>
          <Content>
            <Breadcrumb className="margin_right_left">
              <Breadcrumb.Item>Clientes</Breadcrumb.Item>
              <Breadcrumb.Item>Cadastrar</Breadcrumb.Item>
            </Breadcrumb>
            <CardContainer>{dashContent && content(dashContent)}</CardContainer>
            <Footer className="text_center">
              Ant Design ©2020 Criado por Cleverson Fernandes
            </Footer>
          </Content>
        </Layout>
      </Layout>
    </Container>
  );
};
export default Dashboard;
