import React, { useEffect, useState,useRef } from "react";
import { Table, Tag,Input, Button,Space  } from "antd";

import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

import CustomModel from '../CustomModel'

import { useData } from "../../context/DataContext";


const MyTable = () => {
  const { usersData } = useData();

  const [showModel, setShowModel] = useState(false);
  const [userActionInfo, setUserActionInfo] = useState();
  const [tableData, setTableData] = useState([]);
  const [search, setSearch] = useState({    searchText: '',searchedColumn: ''})
  const reference = useRef();

  const render = () => {
    const data = [];
    usersData.forEach((user,index) => {    

      data.push({
        key: index,
        fullName: user.name,
        id: user.id,
        address: user.address.street,
        city: user.city,
        isolate_start_day: user.date.startIsolated,
        isolate_end_day: user.date.endIsolated,
        positive_to_covid: [user.covidResult.positive],
        phone_number: user.phone,
        collaborator: [user.collaborator]
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


  const openModel = (value)=>{
    setUserActionInfo(value);
    setShowModel(true);

  }

  
  const columns = [
    {
      title: "Name",
      dataIndex: "fullName",
      width: 100,      
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
      title: "Phone",
      dataIndex: "phone_number",
      width: 100,  
    },
    {
      title: "City",
      dataIndex: "city",
      width: 80,
    },
    {
      title: "Isolated Start",
      dataIndex: "isolate_start_day",
      width: 120,
      ...getColumnSearchProps('isolate_start_day'),
    },
    {
      title: "Isolated End",
      dataIndex: "isolate_end_day",
      width: 120,
      ...getColumnSearchProps('isolate_end_day'),

    },
    { 
    title: "Positive",
    dataIndex: "positive_to_covid",
    width: 100,
    ...getColumnSearchProps('positive_to_covid'),
    render: tags => (
      <>
      {
        tags.map((tag)=>{
  
          let color = tag? 'red' : 'green';
  
          return(
            <Tag color={color} key={tag}>
            {tag? 'YES': 'NO'}
          </Tag>
          );
        })
      }
      </>
  
    ),
  },
  { 
    title: "Collaborator",
    dataIndex: "collaborator",
    width: 130,
    ...getColumnSearchProps('collaborator'),
    render: tags => (
      <>
      {
        tags.map((tag)=>{
  
          let color = tag === 'Collaborator'? 'green' : tag ==='Uncollaborator'? 'red' : 'orange';
  
          return(
            <Tag color={color} key={tag}>
            {tag}
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
    width: 80,
    render: (value) => {
      return(
        <Button
        type="primary"
         onClick ={()=>{
          openModel(value);
         }}
        >
          action
        </Button>

      )

    },
  },
  ]
  
  return (
    
    <>
    {showModel?<CustomModel visible={showModel} setVisible={setShowModel}  userInfo={userActionInfo}/> : <></>}
    <Table
      bordered={true}
      columns={columns}
      dataSource={tableData}
      pagination={false}
      scroll={{ y: 220 }}
      showHeader={true}
      style={{
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#E5E5E5",
        margin: "5px",
        boxShadow: " 0 2px 2px 0 rgba(0, 0, 0, 0.2)",
      }}
    />

    </>
  );
};

export default MyTable;
