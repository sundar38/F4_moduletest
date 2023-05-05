import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, FETCH_PROFILEDATA } from "./actiontypes"
import axios from "axios"

export const fetchdata=()=>{
    return{
        type: "FETCH_DATA"
    }
}
export const fetchdatasuccess=(data)=>{
    console.log("hi");
    return{
        type: "FETCH_DATA_SUCCESS",
        payload: data
    }
}
export const fetchdatafailure=(error)=>{
    return{
        type: "FETCH_DATA_FAILURE",
        payload: error
    }
}
export const fetchprofiledata=(data)=>{
    console.log("in action profile");
    return{
        type: "FETCH_PROFILEDATA",
        payload: data
    }
}
export const fetchingdata=(name, password)=> async (dispatch)=>{
    dispatch(fetchdata())
    try{
    const res= await fetch('https://dummyjson.com/auth/login', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({
                                            username:name,
                                            password:password,
                                    })
                    })
       const data=await res.json() 
       console.log(data);
       dispatch(fetchdatasuccess(data))
    }
    catch(e){
        console.log(e.message())
        dispatch(fetchdatafailure(e.message))
    }
}
export const fetchingprofiledata=(id)=> async (dispatch)=>{
    const response= await axios.get(`https://dummyjson.com/users/${id}`)
    console.log(response.data);
    dispatch(fetchprofiledata(response.data))
}