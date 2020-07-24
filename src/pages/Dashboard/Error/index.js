import React from "react";
import { ApiOutlined } from "@ant-design/icons";

import { Container, Return } from "./styles";

export default function Error() {
  return (
    <Container>
      <ApiOutlined />
      <h1>404</h1>
      <h3>Não encontramos a página solicitada </h3>
      <p>
        <Return to="dashboard/home">Clique aqui</Return> voltar ao início
      </p>
    </Container>
  );
}
