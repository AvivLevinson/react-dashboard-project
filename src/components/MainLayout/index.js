import React from "react";

import { Layout } from "antd";
import { Row, Col } from "antd";


import CustomHeader from "../CustomHeader";
import SideBar from "../Sidebar";

import CustomCard from "../CustomCard";
import Map from "../Map";
import MyTable from "../MyTable";
import CustomCalendar from "../CustomCalendar";
import MyBarChart from "../MyBarChart";
import CustomPie from "../CustomPie";

// custom provider 
import {DataProvider} from '../../context/DataContext'

import {
  WarningOutlined,
  UsergroupDeleteOutlined,
  CheckSquareOutlined,
  HeartOutlined,
} from "@ant-design/icons";


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
              <Row justify="space-between" align="bottom">
                <Col span={6}>
                  <CustomCard
                    number="128"
                    description="Positive With"
                    icon={<WarningOutlined style={{ fontSize: "60px" }} />}
                  />
                </Col>
                <Col span={6}>
                  <CustomCard
                    number="50" 
                    description="Positive Without"
                    icon={
                      <UsergroupDeleteOutlined style={{ fontSize: "60px" }} />
                    }
                  />
                </Col>
                <Col span={6}>
                  <CustomCard
                    number="10"
                    description="Negative"
                    icon={<CheckSquareOutlined style={{ fontSize: "60px" }} />}
                  />
                </Col>
                <Col span={6}>
                  <CustomCard
                    number="50"
                    description="Healthy"
                    icon={<HeartOutlined style={{ fontSize: "60px" }} />}
                  />
                </Col>
              </Row>
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
