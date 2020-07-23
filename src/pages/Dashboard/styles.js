import styled from "styled-components";
import { Layout, Menu } from "antd";

export const Container = styled(Layout)`
  height: 100vh;
`;
export const Content = styled(Layout.Content)`
  margin: 0 16px;
`;

export const Siderbar = styled(Layout.Sider)`
  background: var(--white);
`;

export const ContainerMenu = styled(Menu)`
  height: 100%;
`;

export const CardContainer = styled.div`
  background: var(--white);
  min-height: 360px;
  padding: 24px;

  > h1 {
    text-align: center;
    font-size: 1.2em;
    font-weight: bold;
    color: var(--dark-light);
  }
`;
