import React, { useRef } from "react";

// import { useSelector, useDispatch } from "react-redux";
import { Form } from "@unform/web";
import {
  Container,
  Card,
  Button,
  LabelInput,
  ContainerInput,
  SubTitle,
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
        <SubTitle>
          Esqueceu a senha? <br />
          Digite seu email abaixo para recupera-la!
        </SubTitle>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <ContainerInput>
            <LabelInput>Usuário</LabelInput>
            <Input name="email" placeholder="Digite seu email" />
          </ContainerInput>

          <Button type="submit">Recuperar</Button>
          <RecoverPassword to="/">Lembrei a senha</RecoverPassword>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;
