import axios from "axios";
import React, { useState } from "react";

const init = {
  email: "",
  password: "",
};

const Login = () => {
    const [userData, setUserData] = useState(init);

    const handleSubmit = (e) => {
      e.preventDefault();
      loginUser()
    };
  
    const loginUser = async() => {
  let obj = {
  
      email:userData.email,
      password:userData.password,
  } 
  try { 
      let res = await axios.post('https://alive-wasp-tux.cyclic.app/users/login', obj)
    //   res = await res.json()
    //   console.log(res)
  localStorage.setItem('token', res.data.token)
      alert(res.data.msg)

  } catch (error) {
      alert(error)
  }
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input type="text" name="" id="" placeholder="Enter Email" value={userData.email} onChange={(e)=> setUserData({...userData, email: e.target.value})}  />
        <input type="text" name="" id="" placeholder="Enter Password" value={userData.password} onChange={(e)=> setUserData({...userData, password: e.target.value})} />
       <input type="submit"  value={'login'}/>


      </form>
    </div>
  )
}

export default Login