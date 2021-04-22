import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Full Name",
    dataIndex: "fullName",
    width: 100,
  },
  {
    title: "Id",
    dataIndex: "id",
    width: 100,
  },
  {
    title: "Address",
    dataIndex: "address",
    width: 100,
  },
  {
    title: "City",
    dataIndex: "city",
    width: 100,
  },
  {
    title: "Isolated Start Day",
    dataIndex: "isolate_start_day",
    width: 120,
  },
  {
    title: "Isolated End Day",
    dataIndex: "isolate_end_day",
    width: 120,
  },
  {
    title: "Positive To Covid",
    dataIndex: "positive_to_covid",
    width: 120,
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    fullName: `Edward King ${i}`,
    id: i + 1,
    address: `London, Park Lane no. ${i}`,
    city: `israel ${i}`,
    isolate_start_day: `${i}`,
    isolate_end_day: `${i++}`,
    positive_to_covid: 'true',
  });
}

const MyTable = () => {
  return (
    <Table
      bordered={true}
      columns={columns}
      dataSource={data}
      pagination={false }
      scroll={{ y: 200 }}
      showHeader={true}
      style={{borderStyle:'solid', borderWidth:'1px', borderColor:'#E5E5E5', margin:'5px',boxShadow:' 0 2px 2px 0 rgba(0, 0, 0, 0.2)'}}
    />
  );
};

export default MyTable;
