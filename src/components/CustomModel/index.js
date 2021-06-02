import React,{useState} from 'react';
import { Modal, Button,Card } from 'antd';

const CustomModel = ({visible,setVisible,  userInfo})=>{
    const [ loading, setLoading] = useState(false);


    const showModal = () => {
        setVisible(true)
      };
    
      const handleOk = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
            setVisible(false);
        }, 3000);
      };
    
      const handleCancel = () => {
        setVisible(false)

      };


    return (
        <>
          <Modal
            visible={visible}
            title="Make Action"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Return
              </Button>,
              <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                Submit
              </Button>,
              <Button
                key="link"
                href="https://google.com"
                type="primary"
                loading={loading}
                onClick={handleOk}
              >
                Search on Google
              </Button>,
            ]}
          >
                 <Card
        hoverableauto={'true'}
        style={{ borderStyle:'solid', borderWidth:'1px', borderColor:'#E5E5E5', margin:'3px',boxShadow:' 0 2px 8px 0 rgba(0, 0, 0, 0.2)'}}
        hoverable={true}
      
      >
        <Card.Meta 
        title={'number'}
        description={'description'}/>
      </Card>
      <Card
        hoverableauto={'true'}
        style={{ borderStyle:'solid', borderWidth:'1px', borderColor:'#E5E5E5', margin:'3px',boxShadow:' 0 2px 8px 0 rgba(0, 0, 0, 0.2)'}}
        hoverable={true}
      
      >
        <Card.Meta 
        title={'number'}
        description={'description'}/>
      </Card>
      <Card
        hoverableauto={'true'}
        style={{ borderStyle:'solid', borderWidth:'1px', borderColor:'#E5E5E5', margin:'3px',boxShadow:' 0 2px 8px 0 rgba(0, 0, 0, 0.2)'}}
        hoverable={true}
      
      >
        <Card.Meta 
        title={'number'}
        description={'description'}/>
      </Card>
          </Modal>
        </>
      );

}

export default CustomModel;