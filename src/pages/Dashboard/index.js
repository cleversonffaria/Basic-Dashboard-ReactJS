import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb, Avatar } from "antd";
import { HomeOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";

//#region  Imports Local
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
import Register from "./Clients/Register";
import Home from "./Home";

import api from "../../services/api";
//#endregion

const { Footer } = Layout;
const { SubMenu } = Menu;

const Dashboard = ({ match, ...props }) => {
  const [collapsed, setCollapsed] = useState(false);

  //#region Functions
  const breadcrumb = (id) => {
    switch (id) {
      case "clients":
        return (
          <>
            <Breadcrumb.Item>Clientes</Breadcrumb.Item>
            <Breadcrumb.Item>Ver Todos</Breadcrumb.Item>
          </>
        );
      case "register":
        return (
          <>
            <Breadcrumb.Item>Clientes</Breadcrumb.Item>
            <Breadcrumb.Item>Cadastrar</Breadcrumb.Item>
          </>
        );
      default:
        return <Breadcrumb.Item>Inicio</Breadcrumb.Item>;
    }
  };

  const content = (id) => {
    switch (id) {
      case "clients":
        return <Clients />;
      case "register":
        return <Register />;
      default:
        return <Home />;
    }
  };
  //#endregion
  useEffect(() => {
    async function getUser() {
      const response = await api.get("user/1");
      console.log(response);
    }
    getUser();
  }, []);
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
          breakpoint="md"
          trigger={null}
          collapsedWidth={0}
          onBreakpoint={(broken) => {
            setCollapsed(broken);
          }}
        >
          <ContainerMenu mode="inline" defaultSelectedKeys={["home"]}>
            <Menu.Item
              onClick={() => props.history.push("/dashboard/home")}
              icon={<HomeOutlined />}
            >
              Inicio
            </Menu.Item>
            <SubMenu icon={<UserOutlined />} title="Clientes">
              <Menu.Item
                onClick={() => props.history.push("/dashboard/clients")}
              >
                Ver Todos
              </Menu.Item>
              <Menu.Item
                onClick={() => props.history.push("/dashboard/register")}
              >
                Cadastrar
              </Menu.Item>
            </SubMenu>
          </ContainerMenu>
        </Siderbar>
        <Layout>
          <Content>
            <Breadcrumb className="margin_right_left">
              {breadcrumb(match.params.id)}
            </Breadcrumb>

            <CardContainer>{content(match.params.id)}</CardContainer>

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
