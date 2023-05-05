import { combineReducers } from "redux"
import { FETCH_DATA, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS, FETCH_PROFILEDATA } from "./actiontypes"


let initialstate={
    data: [],
    loading: true,
    error:""
}
let initialprofilestate={
     profiledata:[]
}
const datareducer=(state=initialstate, action)=>{
    switch(action.type){
        case FETCH_DATA:
            return{
                ...state, loading: false
            }
        case FETCH_DATA_SUCCESS:
            console.log("welcone");
            return{
                ...state,
                loading: false,
                data: action.payload
            }
        case FETCH_DATA_FAILURE: 
            return{
                ...state,
                error: action.payload
            }
            default: 
                return state           
            
    }
}
const profilereducer=(state=initialprofilestate, action)=>{
    switch(action.type){
        case FETCH_PROFILEDATA:
            console.log("in profile");
            return{                
                ...state, 
                profiledata: action.payload
            }
        default: 
            console.log("in default");
            return state
    }
}
const rootreducer=combineReducers({
    data: datareducer,
    profile: profilereducer
})
export default rootreducer