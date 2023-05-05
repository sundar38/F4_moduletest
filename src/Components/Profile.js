import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchingprofiledata } from '../actions'
function Profile() {
    let dispatch=useDispatch()
    let userdata=useSelector((state)=> state.data)
    console.log(userdata.data.id);
    useEffect(()=>{
        dispatch(fetchingprofiledata(userdata.data.id))
    },[dispatch])
    
    let profiledatas=useSelector((state)=> state.profile)
    console.log(profiledatas);
    //let image={profiledatas.profiledata.image}
  return (
    <div> 
        {
            <div className='entiresection' >
            <div className='profilesection'>
             <p>Id: {profiledatas.profiledata.id}</p>
            <p>Name: {profiledatas.profiledata.username} </p>
            <p>LastName: {profiledatas.profiledata.lastName}</p>
           <p>Address: {profiledatas.profiledata.address.address}</p>
            <p>City: {profiledatas.profiledata.address.city}</p>
            <p>State:{profiledatas.profiledata.address.state} </p> 
            <p>Email: {profiledatas.profiledata.email}</p>
            <p>Phone: {profiledatas.profiledata.phone}</p>
            <p>Gender: {profiledatas.profiledata.gender}</p>
            <p>Password:{profiledatas.profiledata.password}</p>
            <p>University: {profiledatas.profiledata.university}</p>
            <p>Company name: {profiledatas.profiledata.company.name}</p>
            <p>Company tite: {profiledatas.profiledata.company.title}</p>  
            </div>
            <div className='imagesection'>
                <img src={profiledatas.profiledata.image} className='imagesection'></img>
            </div>
        </div>
       }      
        

    </div>
  )
}

export default Profile