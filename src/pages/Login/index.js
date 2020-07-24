import React, { useRef } from "react";

// import { useSelector, useDispatch } from "react-redux";
import { Form } from "@unform/web";
//#region Imports Local
import {
  Container,
  Card,
  Button,
  LabelInput,
  ContainerInput,
  Title,
  RecoverPassword,
} from "./styles";
//#endregion
import { validateInputLogin } from "../../util/validate";
// import { Creators as AuthActions } from "../../store/ducks/auth";

import Input from "../../components/Input";

function Login() {
  //#region Hooks and States
  const formRef = useRef(null);
  //#endregion

  //#region Function
  const handleSubmit = (data, { reset }) => {
    try {
      formRef.current.setErrors({});
      validateInputLogin(data);
      reset();
    } catch (error) {
      formRef.current.setFieldError(error.type, error.message);
    }
  };
  //#endregion

  return (
    <Container>
      <Card>
        <Title>Login Painel</Title>
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

          <Button type="submit">Entrar</Button>
          <RecoverPassword to="/forgot">Esqueci a senha</RecoverPassword>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;
