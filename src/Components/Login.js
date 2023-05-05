import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchingdata } from '../actions'
function Login() {
    const [name,setName]=useState("")
    const [password, setPassword]=useState("")
    let dispatch=useDispatch()
    function fetchingapi(){
        dispatch(fetchingdata(name, password))
    }
    let userdata= useSelector((state)=> state.data)
     {console.log(userdata)}
     //{alert({userdata.data.message})}
  return (
    <div className='loginform'>
        <input type='text' placeholder='Enter your name' onChange={e=> setName(e.target.value)}></input>
        <br></br>
        <br></br>
        <input type='password' placeholder='Enter your password' onChange={e=> setPassword(e.target.value)}></input>
        <br></br>
        <br></br>
        <button onClick={fetchingapi}>Login</button>
        {
            userdata.data.message==""?(console.log("hi")):(
                <div>
                    <p className='error'>{userdata.data.message}</p>
                </div>
            )
        }

        {
           userdata.data==Array(0)?(
            console.log("wrong")
           ):(<div>
            <p>Id: {userdata.data.id}</p>
            <p>Name: {userdata.data.username}</p>
        </div>) 
            
        }   
    </div>
  )
}

export default Login