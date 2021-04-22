import React from 'react';

import { Card } from 'antd';


/*

const MyCard = ({number, description,icon }) =>{
    return(
        <Card
        hoverableauto
        style={{ width: '90%', borderStyle:'solid', borderWidth:'1px', borderColor:'#E5E5E5'}}
        cover={icon}
        hoverable={true}
        
      >
        <Card.Meta 
        title={number}
        description={description}/>
      </Card>
      );
}

*/ 


const MyCard = ({number, description,icon }) =>{
    return(
        <Card
        hoverableauto
        style={{ borderStyle:'solid', borderWidth:'1px', borderColor:'#E5E5E5', margin:'3px',boxShadow:' 0 2px 8px 0 rgba(0, 0, 0, 0.2)'}}
        cover={icon}
        hoverable={true}
      
      >
        <Card.Meta 
        title={number}
        description={description}/>
      </Card>
      );
}

export default MyCard;