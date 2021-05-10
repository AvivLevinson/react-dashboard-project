import React from "react";

import { Layout } from "antd";
import { Row, Col } from "antd";

import CustomHeader from "../../components/CustomHeader";
import SideBar from "../../components/Sidebar";

const { Content } = Layout;


const DashboardLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <CustomHeader />
      <Layout className="site-layout">
        <SideBar />
        <Content>
            {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
