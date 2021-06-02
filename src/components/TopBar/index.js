import React from "react";
import { Row, Col } from "antd";

import CustomCard from "../CustomCard";

import { useData } from "../../context/DataContext";

import {
  WarningOutlined,
  UsergroupDeleteOutlined,
  CheckSquareOutlined,
  HeartOutlined,
} from "@ant-design/icons";

const TopBar = () => {
  const { globalInfo } = useData();

  return (
    <Row justify="space-between" align="bottom">
      <Col span={6}>
        <CustomCard
          number={globalInfo.positiveWithSympyoms}
          description="Positive With"
          icon={<WarningOutlined style={{ fontSize: "60px" }} />}
        />
      </Col>
      <Col span={6}>
        <CustomCard
          number={globalInfo.positiveWithOutSympyoms}
          description="Positive Without"
          icon={<UsergroupDeleteOutlined style={{ fontSize: "60px" }} />}
        />
      </Col>
      <Col span={6}>
        <CustomCard
          number={globalInfo.negative}
          description="Negative"
          icon={<CheckSquareOutlined style={{ fontSize: "60px" }} />}
        />
      </Col>
      <Col span={6}>
        <CustomCard
          number={ 50 + globalInfo.positiveWithOutSympyoms + globalInfo.positiveWithSympyoms - globalInfo.negative}
          description="Healthy"
          icon={<HeartOutlined style={{ fontSize: "60px" }} />}
        />
      </Col>
    </Row>
  );
};

export default TopBar;
