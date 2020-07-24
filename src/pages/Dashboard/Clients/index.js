import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Input, InputNumber, Popconfirm, Form, message } from "antd";

const originData = [];

for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    cpf: 12355950233,
    tell: 22997349644,
    mail: "cleversonffaria@gmail.com",
    city: `Cidade. ${i}`,
  });
}

const Clients = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");
  const [valueInput, setValueInput] = useState("");

  const InputChange = (event) => {
    setValueInput(event.target.value);
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
          <Form.Item
            name={dataIndex}
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Por favor insira ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({ name: "", cpf: "", tell: "", mail: "", ...record });
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
      dataIndex: "tell",
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
            <Link onClick={() => save(record.key)} style={{ marginRight: 8 }}>
              Salvar
            </Link>
            <Popconfirm title="Deseja cancelar?" onConfirm={cancel}>
              <Link>Cancelar</Link>
            </Popconfirm>
          </span>
        ) : (
          <Link disabled={editingKey !== ""} onClick={() => edit(record)}>
            Editar
          </Link>
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
