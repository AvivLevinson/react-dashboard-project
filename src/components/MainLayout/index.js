import React from "react";

import { Layout } from "antd";
import { Row, Col } from "antd";


import CustomHeader from "../CustomHeader";
import SideBar from "../Sidebar";
import CustomDrawer from "../CustomDrawer";


import MyCard from "../MyCard";
import Map from "../Map";
import MyTable from "../MyTable";
import MyCalendar from "../MyCalendar";
import MyRadarChart from "../MyRadarChart";
import MyBarChart from "../MyBarChart";




import {
  WarningOutlined,
  UsergroupDeleteOutlined,
  CheckSquareOutlined,
  HeartOutlined,
} from "@ant-design/icons";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <CustomHeader/>
      <Layout className="site-layout">
        <SideBar />
        <Content>
          <Row>   
            <Col span={18}>
              <Row justify="space-between" align="bottom">
                <Col span={6}>
                  <MyCard
                    number="128"
                    description="Positive"
                    icon={<WarningOutlined style={{ fontSize: "60px" }} />}
                  />
                </Col>
                <Col span={6}>
                  <MyCard
                    number="50"
                    description="Insulators"
                    icon={
                      <UsergroupDeleteOutlined style={{ fontSize: "60px" }} />
                    }
                  />
                </Col>
                <Col span={6}>
                  <MyCard
                    number="10"
                    description="Vaccinated"
                    icon={<CheckSquareOutlined style={{ fontSize: "60px" }} />}
                  />
                </Col>
                <Col span={6}>
                  <MyCard
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
                <CustomDrawer/>
                </Col>
              </Row>
            </Col>
            <Col span={6}>
                    <Row>
                      <Col  span={24}>
                      <MyCalendar/>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24} >
                      <MyBarChart/>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24} >
                      <MyRadarChart/>
                      </Col>
                    </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
