import React from "react";
import { TeamOutlined, UserAddOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

import { Container, Card } from "./styles";
export default function Home() {
  const user = useSelector((state) => state.user);
  return (
    <Container>
      <h1>
        Olá {user.username}, Seja bem vindo ao nosso sistema de gerenciamento.
      </h1>

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
