import React, { useState } from "react";


import { useData } from "../../context/DataContext";

import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  Typography,
  message,
} from "antd";




const { Text } = Typography;

const { Option } = Select;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 70,
      }}
    >
      <Option value="054">054</Option>
      <Option value="052">052</Option>
      <Option value="053">053</Option>
      <Option value="051">051</Option>
      <Option value="050">050</Option>
    </Select>
  </Form.Item>
);

const CustomDrawer = () => {
  const [visible, setVisible] = useState(false);
 
  const { sendMessageToUser } = useData();

  const showDrawer = () => {
    setVisible(true);
  };

const notification = ()=>{    
  message
  .loading('In Progress..', 3)
  .then(() => message.success('Send Message Success', 2.5))

}

  const onClose = () => {
    setVisible(false);
  };

  const submit = (values) => {
    console.log('this is values: ', values);
    const {id='0000000', name,prefix,phone, message,dateTime} = values;
   
    const startInsulation = dateTime[0].format('DD-MM-YYYY');
    const endInsulation = dateTime[1].format('DD-MM-YYYY');

    console.log('startInsulation: ', startInsulation);
    console.log('endInsulation: ', endInsulation);


    const user = {
      id,
      name,
      phone: prefix+phone,
      message,
      startInsulation,
      endInsulation
    } 

    sendMessageToUser(user);
    onClose();
    notification();
    
  };  

  return (
    <>
      <Text onClick={showDrawer} style={{ color: "white" }}>
        Add Isulated
      </Text>
      <Drawer
        title="Add Isulated"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Form layout="vertical" hideRequiredMark onFinish={submit}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="phone"
                label="Phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input
                  addonBefore={prefixSelector}
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[
                  { required: true, message: "Please choose the dateTime" },
                ]}
              >
                <DatePicker.RangePicker
                  style={{ width: "100%" }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="message"
                label="message"
                rules={[
                  {
                    required: true,
                    message: "please enter message",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter url description"
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default CustomDrawer;

/*
              <div
                style={{
                  textAlign: 'right',
                }}
              >
                <Button onClick={onClose} style={{ marginRight: 8 }}>
                  Cancel
                </Button>
                <Button onClick={submit} type="primary">
                  Submit
                </Button>
              </div>
            }

*/
