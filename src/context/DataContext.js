import React, {useState,useContext, useEffect } from 'react';

import moment from 'moment';



import {fetchDataByDate,addFutureUser} from '../api';

const DataContext = React.createContext();


export const DataProvider = ({children})=>{
   
    const [usersData, setUsersData ] = useState([]);
    const [date,setDate]  = useState(moment().format('DD-MM-YYYY'));

    useEffect(()=>{

        (async ()=>{

            try{
                
                console.log('useEffect -> Data Provider');
                const data = await fetchDataByDate(date);
                const {users} = data
                console.log('this is users data:', users);
                setUsersData([...users]);

            }catch(error){
                console.log(error);

            }

        })();

    },[date]);


    

    const getDate = ()=>{
        return date;
    }

    const getDataByDate = (date) =>{
        //use effect is active after change the state of date
        setDate(date)
    }

    const geGlobalData = () =>{
        //use effect is active after change the state of date
        //need to return info for card from usersData
        return;
    }


    // send user sms message
    const sendMessageToUser = async (user)=>{

        console.log('sendMessageToUser', user); 
        
        try {
            const data = await addFutureUser(user);
            console.log(data);
        
        } catch (error) {
            console.log(error);

        }
    }


   



    return(
        <DataContext.Provider
        
        value={{
            usersData,
            getDataByDate,
            getDate,
            geGlobalData,
            sendMessageToUser
        }}
        >
        {children}

        </DataContext.Provider>
    );
};


export const useData = ()=> useContext(DataContext)