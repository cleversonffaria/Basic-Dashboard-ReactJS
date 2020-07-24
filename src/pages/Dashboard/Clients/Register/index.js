import React, { useState } from "react";
import { Form, Row, Col, Button, message } from "antd";
import { unMask } from "remask";
import {
  UserOutlined,
  IdcardOutlined,
  PhoneOutlined,
  MailOutlined,
  HomeOutlined,
} from "@ant-design/icons";

import { masked } from "../../../../util/helpers";
import { validateInputClients } from "../../../../util/validate";
import { InputForm } from "../styles";

const initialValue = {
  name: "",
  cpf: "",
  tel: "",
  mail: "",
  city: "",
};

const Register = () => {
  const [form] = Form.useForm();

  const [valueInput, setValueInput] = useState(initialValue);

  const InputChange = (event) => {
    const { name, value } = event.target;

    setValueInput({ ...valueInput, [name]: masked(name, value) });
  };

  const onFinish = () => {
    try {
      validateInputClients(valueInput);
      const cpf = unMask(valueInput.cpf);
      const tel = unMask(valueInput.tel);
      const data = {
        ...valueInput,
        ["cpf"]: cpf,
        ["tel"]: tel,
      };

      message.success("Sucesso");
    } catch (error) {
      message.warning(error);
    }
  };

  const getFields = () => {
    return (
      <>
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 12, offset: 6 }}
          md={{ span: 10, offset: 7 }}
          lg={{ span: 8, offset: 8 }}
        >
          <InputForm
            name="name"
            prefix={<UserOutlined className="margin_right" />}
            onChange={(event) => InputChange(event)}
            placeholder="Nome completo"
          />
        </Col>
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 12, offset: 6 }}
          md={{ span: 10, offset: 7 }}
          lg={{ span: 8, offset: 8 }}
        >
          <InputForm
            name="cpf"
            prefix={<IdcardOutlined className="margin_right" />}
            value={valueInput.cpf}
            onChange={InputChange}
            placeholder="CPF"
          />
        </Col>
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 12, offset: 6 }}
          md={{ span: 10, offset: 7 }}
          lg={{ span: 8, offset: 8 }}
        >
          <InputForm
            name="tel"
            value={valueInput.tel}
            onChange={InputChange}
            prefix={<PhoneOutlined className="margin_right" />}
            placeholder="Telefone"
          />
        </Col>
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 12, offset: 6 }}
          md={{ span: 10, offset: 7 }}
          lg={{ span: 8, offset: 8 }}
        >
          <InputForm
            name="mail"
            value={valueInput.mail}
            onChange={InputChange}
            prefix={<MailOutlined className="margin_right" />}
            placeholder="E-mail"
          />
        </Col>
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 12, offset: 6 }}
          md={{ span: 10, offset: 7 }}
          lg={{ span: 8, offset: 8 }}
        >
          <InputForm
            name="city"
            value={valueInput.city}
            onChange={InputChange}
            prefix={<HomeOutlined className="margin_right" />}
            placeholder="Cidade"
          />
        </Col>
      </>
    );
  };

  return (
    <Form form={form} name="advanced_search" onFinish={onFinish}>
      <Row>{getFields()}</Row>
      <Row justify="center">
        <Col md={8} style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit">
            Cadastrar
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
export default Register;
