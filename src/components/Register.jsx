import axios from "axios";
import React, { useState } from "react";

const init = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [userData, setUserData] = useState(init);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userData)
    registerUser();
  };

  const registerUser = async () => {
    let obj = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    };
    // console.log(obj)
    try {
      let res = await axios.post(
        "https://alive-wasp-tux.cyclic.app/users/register",
        obj
      );
      // res = await res.json()
      // console.log(res)
      alert(res.data.msg);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Password"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <input type="submit" value={"register"} />
      </form>
    </div>
  );
};

export default Register;
