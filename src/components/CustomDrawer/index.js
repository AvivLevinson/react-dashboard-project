import React, {useState} from 'react';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker,Typography } from 'antd';

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

const CustomDrawer = ()=>{
    const [visible, setVisible] = useState(false)


    const showDrawer = () => {
        setVisible(true);
    };
  
    const onClose = () => {
        setVisible(false);

    };
    return (
        <>
          <Text onClick={showDrawer} style={{color:'white'}}>
            Add Isulated
          </Text>
          <Drawer
            title="Add Isulated"
            width={720}
            onClose={onClose}
            visible={visible}
            bodyStyle={{ paddingBottom: 80 }}
            footer={
              <div
                style={{
                  textAlign: 'right',
                }}
              >
                <Button onClick={onClose} style={{ marginRight: 8 }}>
                  Cancel
                </Button>
                <Button onClick={onClose} type="primary">
                  Submit
                </Button>
              </div>
            }
          >
            <Form layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="name"
                    label="Name"
                    rules={[{ required: true, message: 'Please enter user name' }]}
                  >
                    <Input placeholder="Please enter user name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
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
                    rules={[{ required: true, message: 'Please choose the dateTime' }]}
                  >
                    <DatePicker.RangePicker
                      style={{ width: '100%' }}
                      getPopupContainer={trigger => trigger.parentElement}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="description"
                    label="Description"
                    rules={[
                      {
                        required: true,
                        message: 'please enter url description',
                      },
                    ]}
                  >
                    <Input.TextArea rows={4} placeholder="please enter url description" />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Drawer>
        </>
      );
}

export default CustomDrawer;