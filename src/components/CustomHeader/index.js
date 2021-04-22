import React from "react";

import { Layout } from "antd";
import { Row, Col } from "antd";

import { Typography } from "antd";

const { Header } = Layout;
const { Title } = Typography;

const CustomHeader = () => {
  return (
    <Header
      style={{
        background: "#fff",
       
        
        marginBottom:'2px'
      }}
    >
      <Row>
        <Col>
          <Typography>
            <Title level={3} strong={true}>
              DashBoard-Insulator
            </Title>
          </Typography>
        </Col>
      </Row>
    </Header>
  );
};

export default CustomHeader;
