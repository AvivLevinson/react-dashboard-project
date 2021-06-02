import axios from 'axios';

const BASE_URL = 'http://localhost:5000/covid-insulated';


export const fetchDataByDate = async (date)=>{
    console.log('getDataByDate -> ');
    const endPoint = BASE_URL + '/api/supervisor/data-by-date';
    
    const params =  {
        date: date
      }

    try{
        const result = await axios.get(endPoint,{params});
        const {data} = result; 
        return data;

    }catch(error){
        console.log(`Error fetch date vy date, Error: ${error}`);
    }
}


export const addFutureUser  = async (user)=>{

    console.log('addFutureUser -> ');
    console.log('this is user');

    const endPoint = BASE_URL + '/api/supervisor/add-future-user';

    const {id, name,phone,message,startInsulation,endInsulation} = user;
    
    const userInfo = {
        id,
        name,
        phone,
        message,
        startInsulation,
        endInsulation
    };
    
    try{

        const result = await axios.post(endPoint,userInfo);
        const {data} = result; 
        return data;

    }catch(error){
        console.log(`Error set new user to server, Error: ${error}`);
    }
}