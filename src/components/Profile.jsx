import React from 'react'
import { Navigate } from 'react-router-dom';

const Profile = () => {

  const token = localStorage.getItem('token');

  if(!token) {
return <Navigate to={'/login'} />
  }

  return (<>
    <div>Profile</div>
  <button onClick={()=> localStorage.removeItem('token')}>Logout</button>
  
  </>
  )
}

export default Profile