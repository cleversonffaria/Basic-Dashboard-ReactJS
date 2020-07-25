import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Form } from "antd";
import { useDispatch } from "react-redux";

import { Creators as Actions } from "../../../store/ducks/clients";
import { masked } from "../../../util/helpers";
import api from "../../../services/api";

const Clients = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  //#region Inicia todos dados dos clientes
  useEffect(() => {
    async function getClients() {
      const response = await api.get("clients");
      if (response.data) {
        const itens = response.data.map((item) => {
          return {
            ...item,
            cpf: masked("cpf", item.cpf),
            tel: masked("tel", item.tel),
            key: item.id,
          };
        });
        setData(itens);
      }
    }
    getClients();
  }, []);
  //#endregion

  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend", "ascend"],
      editable: true,
    },
    {
      title: "CPF",
      dataIndex: "cpf",
      editable: true,
    },
    {
      title: "Telefone",
      dataIndex: "tel",
      editable: true,
    },
    {
      title: "E-mail",
      dataIndex: "mail",
      sorter: (a, b) => a.mail.length - b.mail.length,
      editable: true,
    },
    {
      title: "Cidade",
      dataIndex: "city",
      sorter: (a, b) => a.city.length - b.city.length,
      editable: true,
    },
    {
      title: "",
      dataIndex: "",
      render: (value) => (
        <Link
          to="/dashboard/edit"
          onClick={() => dispatch(Actions.toggleClients(value))}
        >
          Editar
        </Link>
      ),
    },
  ];

  return (
    <Form form={form} component={false}>
      <Table bordered dataSource={data} columns={columns} />
    </Form>
  );
};
export default Clients;
