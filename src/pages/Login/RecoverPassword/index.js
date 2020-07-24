import React, { useRef } from "react";

// import { useSelector, useDispatch } from "react-redux";
import { Form } from "@unform/web";
import {
  Container,
  Card,
  Button,
  LabelInput,
  ContainerInput,
  RecoverPassword,
} from "../styles";

import { validateInputLogin } from "../../../util/validate";
// import { Creators as AuthActions } from "../../store/ducks/auth";

import Input from "../../../components/Input";

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
        <Form ref={formRef} onSubmit={handleSubmit}>
          <ContainerInput>
            <LabelInput>Nova senha</LabelInput>
            <Input
              type="password"
              name="password"
              placeholder="Digite sua nova senha"
            />
          </ContainerInput>
          <ContainerInput>
            <LabelInput>Repetir senha</LabelInput>
            <Input
              type="password"
              name="repeatPassword"
              placeholder="Digite novamente a senha"
            />
          </ContainerInput>

          <Button type="submit">Enviar</Button>
          <RecoverPassword to="/">Lembrei a senha</RecoverPassword>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;
