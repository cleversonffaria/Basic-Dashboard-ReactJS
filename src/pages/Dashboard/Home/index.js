import React from "react";
import { TeamOutlined, UserAddOutlined } from "@ant-design/icons";

import { Container, Card } from "./styles";
export default function Home() {
  return (
    <Container>
      <h1>Olá cleverson, Seja bem vindo ao nosso sistema de gerenciamento.</h1>

      <p>
        Esse painel oferece uma forma fácil e rápido para cadastrar e visualizar
        seus clientes.
      </p>
      <p>Bastar clicar em uma opção abaixo ou navegar pelo menu lateral</p>
      <div>
        <Card to={"/dashboard/clients"}>
          <TeamOutlined />
          <h3>Ver clientes</h3>
        </Card>
        <Card to={"/dashboard/register"}>
          <UserAddOutlined />
          <h3>Cadastrar</h3>
        </Card>
      </div>
    </Container>
  );
}
