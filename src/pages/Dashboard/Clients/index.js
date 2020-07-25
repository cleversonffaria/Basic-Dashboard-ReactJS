import React, { useState, useEffect } from "react";
import { Table, Input, InputNumber, Popconfirm, Form, message } from "antd";
import { masked } from "../../../util/helpers";

import api from "../../../services/api";

const Clients = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState("");
  const [valueInput, setValueInput] = useState({
    name: "",
    cpf: "",
    tel: "",
    mail: "",
    city: "",
  });

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

  const InputChange = (event) => {
    const { name, value } = event.target;

    setValueInput({ ...valueInput, [name]: masked(name, value) });
  };

  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode =
      inputType === "number" ? (
        <InputNumber />
      ) : (
        <Input onChange={(event) => InputChange(event)} />
      );

    return (
      <td {...restProps}>
        {editing ? (
          <Input onChange={(event) => InputChange(event)} />
        ) : (
          children
        )}
      </td>
    );
  };

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({ name: "", cpf: "", tel: "", mail: "", ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();

      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      message.error("Existe algum campo sem preencher");
    }
  };
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
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="#save"
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Salvar
            </a>
            <Popconfirm title="Deseja cancelar?" onConfirm={cancel}>
              <a href="#cancel">Cancelar</a>
            </Popconfirm>
          </span>
        ) : (
          <a
            href="#edit"
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Editar
          </a>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  console.log(valueInput);
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};
export default Clients;
