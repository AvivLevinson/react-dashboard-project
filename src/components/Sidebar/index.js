import React,{useState} from 'react';

import CustomDrawer from "../CustomDrawer";


import { Layout, Menu } from "antd";
import {
    PieChartOutlined,
    PlusOutlined,
    AreaChartOutlined
  
  } from "@ant-design/icons";

  const {   Sider } = Layout;

const SideBar = ()=>{
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = (collapsed) => {
      console.log(collapsed);
      setCollapsed((prev) => !prev);
    };



    
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{marginTop:'3px'}} >
        <Menu  theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<AreaChartOutlined />}>
            Analyis
          </Menu.Item>
          <Menu.Item key="9" icon={<PlusOutlined />}>
           <CustomDrawer/>
          </Menu.Item>
        </Menu>
      </Sider>
    );

}

export default SideBar;