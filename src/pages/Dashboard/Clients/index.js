import React from "react";
import { Table } from "antd";
function Clients() {
  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "CPF",
      dataIndex: "cpf",
    },
    {
      title: "Telefone",
      dataIndex: "tell",
    },
    {
      title: "E-mail",
      dataIndex: "mail",
      sorter: (a, b) => a.mail.length - b.mail.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Cidade",
      dataIndex: "city",
      sorter: (a, b) => a.city.length - b.city.length,
      sortDirections: ["descend", "ascend"],
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      cpf: 32,
      tell: 2297349644,
      mail: "cleversonffaria@gmail.com",
      city: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      cpf: 42,
      tell: 2297349644,
      mail: "ana@gmail.com",
      city: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      cpf: 32,
      tell: 2297349644,
      mail: "nubiha@gmail.com",
      city: "Sidney No. 1 Lake Park",
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log(pagination);
  }
  return (
    <React.Fragment>
      <h1>Todos clientes cadastrados no sistema</h1>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </React.Fragment>
  );
}
export default Clients;
