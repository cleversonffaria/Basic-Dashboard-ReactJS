import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import { Form } from "@unform/web";
import {
  Container,
  Card,
  Button,
  LabelInput,
  ContainerInput,
  Title,
} from "./styles";

import validateInput from "../../util/validateInput";
// import { Creators as AuthActions } from "../../store/ducks/auth";

import Input from "../../components/Form/input";

function Login() {
  //#region Hooks and States
  const formRef = useRef(null);
  //#endregion

  //#region Function
  const handleSubmit = (data, { reset }) => {
    try {
      formRef.current.setErrors({});
      validateInput(data);
      reset();
    } catch (error) {
      formRef.current.setFieldError(error.type, error.message);
    }
  };
  //#endregion

  return (
    <Container>
      <Card>
        <Title>Login</Title>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <ContainerInput>
            <LabelInput>Usuário</LabelInput>
            <Input name="email" placeholder="Digite seu email" />
          </ContainerInput>

          <ContainerInput>
            <LabelInput>Senha</LabelInput>
            <Input
              type="password"
              name="password"
              placeholder="Digite sua senha"
            />
          </ContainerInput>

          <Button type="submit">Enviar</Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;
