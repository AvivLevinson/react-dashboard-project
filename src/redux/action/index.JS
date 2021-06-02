import * as actions from '../types';


export const getDataByDate = (date)=>{
    return {
        type: actions.GET_DATA_BY_DATE
    }

}


export const setDataByDate = ()=>{
    return{
        type:actions.SET_DATA_BY_DATE
    }

}