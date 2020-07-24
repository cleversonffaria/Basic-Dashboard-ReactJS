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
    color: var(--gray);
  }
`;
export const Header = styled(Layout.Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HideMenu = styled.div`
  margin-left: 25px;
  > span {
    padding: 10px;
    cursor: pointer;
  }
`;

export const Profile = styled.div`
  margin-right: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;

  > div {
    margin-left: 10px;
    line-height: 16px;
    > h1 {
      color: var(--gray);
      font-size: 14px;
      font-weight: 400;
      margin: 0;
    }
    > h3 {
      color: var(--gray);
      font-weight: 400;
      font-size: 14px;
    }
  }
`;
