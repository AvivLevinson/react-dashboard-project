import React, { useEffect, useState,useRef } from "react";
import { Table, Tag,Input, Button,Space  } from "antd";

import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

import { useData } from "../../context/DataContext";



const MyTable = () => {
  const { usersData } = useData();
  const [tableData, setTableData] = useState([]);
  const [search, setSearch] = useState({    searchText: '',searchedColumn: ''})
  const reference = useRef();

  const render = () => {
    const data = [];
    usersData.forEach((user,index) => {    


      data.push({
        key: index,
        fullName: user.userName,
        id: user.id,
        address: user.address,
        city: user.city,
        isolate_start_day: user.start_isolated,
        isolate_end_day: user.end_isolated,
        positive_to_covid: [user.positive_to_covid],
        phone_number: user.phone_number
        
      });

    });

    setTableData(data);
  };

  useEffect(() => {
    render();
  },[usersData]);



  const getColumnSearchProps  = (dataIndex)=>({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            reference.current = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearch({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => reference.current.select(), 100);
      }
    },
    render: text =>
        search.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[search.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearch({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearch({ searchText: '' });
  };


  
  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      width: 100,
      ...getColumnSearchProps('fullName'),
      
    },
    {
      title: "Id",
      dataIndex: "id",
      width: 100,
      ...getColumnSearchProps('id'),

    },
    {
      title: "Address",
      dataIndex: "address",
      width: 100,
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
      width: 100,
      ...getColumnSearchProps('phone_number'),
  
    },
    {
      title: "City",
      dataIndex: "city",
      width: 100,
      ...getColumnSearchProps('city'),
    },
    {
      title: "Isolated Start Day",
      dataIndex: "isolate_start_day",
      width: 120,
      ...getColumnSearchProps('isolate_start_day'),
    },
    {
      title: "Isolated End Day",
      dataIndex: "isolate_end_day",
      width: 120,
      ...getColumnSearchProps('isolate_end_day'),

    },
    { 
    title: "Positive To Covid",
    dataIndex: "positive_to_covid",
    width: 120,
    ...getColumnSearchProps('positive_to_covid'),
    render: tags => (
      <>
      {
        tags.map((tag)=>{
  
          let color = tag === 'true'? 'red' : 'green';
  
          return(
            <Tag color={color} key={tag}>
            {tag.toUpperCase()}
          </Tag>
          );
        })
      }
      </>
  
    ),
  },
  {
    title: 'Action',
    key: 'operation',
    width: 100,
    render: (value) => {
      return(
        <Button
        type="primary"
         onClick = {()=>{
           console.log(value)
         }}
        >
          make action
        </Button>

      )

    },
  },
  ]
  
  return (
    
    <Table
      bordered={true}
      columns={columns}
      dataSource={tableData}
      pagination={false}
      scroll={{ y: 200 }}
      showHeader={true}
      style={{
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#E5E5E5",
        margin: "5px",
        boxShadow: " 0 2px 2px 0 rgba(0, 0, 0, 0.2)",
      }}
    />

    
  );
};

export default MyTable;
