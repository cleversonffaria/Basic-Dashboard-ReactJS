import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  Container,
  Content,
  CardContainer,
  ContainerMenu,
  Siderbar,
} from "./styles";

import Clients from "./Clients";
import Edit from "./Clients/Edit";
import Register from "./Clients/Register";

const { Header, Footer } = Layout;
const { SubMenu } = Menu;

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Container>
      <Header className="layout-background" style={{ padding: 0 }} />
      <Layout>
        <Siderbar
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <ContainerMenu mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              Inicio
            </Menu.Item>
            <SubMenu icon={<SettingOutlined />} title="Clientes">
              <Menu.Item
                key="setting:1"
                onClick={({ item }) => console.log(item)}
              >
                Ver Todos
              </Menu.Item>
              <Menu.Item key="setting:2">Editar</Menu.Item>
              <Menu.Item key="setting:3">Cadastrar</Menu.Item>
            </SubMenu>
          </ContainerMenu>
        </Siderbar>
        <Layout>
          <Content>
            <Breadcrumb className="margin_right_left">
              <Breadcrumb.Item>Clientes</Breadcrumb.Item>
              <Breadcrumb.Item>Cadastrar</Breadcrumb.Item>
            </Breadcrumb>
            <CardContainer>
              <h1>Todos clientes cadastrados no sistema</h1>
              <Clients />
            </CardContainer>
            <Footer className="text_center">
              Ant Design ©2020 Created by Cleverson Fernandes
            </Footer>
          </Content>
        </Layout>
      </Layout>
    </Container>
  );
}
export default Dashboard;
