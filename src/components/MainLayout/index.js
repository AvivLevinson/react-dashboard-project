import React from "react";

import { Layout } from "antd";
import { Row, Col } from "antd";


import CustomHeader from "../CustomHeader";
import SideBar from "../Sidebar";

import Map from "../Map";
import MyTable from "../MyTable";
import CustomCalendar from "../CustomCalendar";
import MyBarChart from "../MyBarChart";
import CustomPie from "../CustomPie";
import TopBar from "../TopBar";



// custom provider 
import {DataProvider} from '../../context/DataContext'




const { Content } = Layout;

const MainLayout = () => {
  return (
    <DataProvider>
    <Layout style={{ minHeight: "100vh" }}>
      <CustomHeader/>
      <Layout className="site-layout">
        <SideBar />
        <Content>
          <Row>   
            <Col span={18}>
              <TopBar/>
              <Row>
                <Col span={24}>
                <Map />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                <MyTable />
                </Col>
              </Row>
            </Col>
            <Col span={6}>
                    <Row>
                      <Col  span={24}>
                      <CustomCalendar/>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24} >
                      <MyBarChart/>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24} >
                      <CustomPie/>
                      </Col>
                    </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
    </DataProvider>
  );
};

export default MainLayout;
