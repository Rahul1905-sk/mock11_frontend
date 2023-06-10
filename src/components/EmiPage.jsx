import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const init = {
  loanAmt: 100000,
  rate: 10,
  months: 6,
};

const EmiPage = () => {
  const [userDetails, setUserDetails] = useState(init);

  useEffect(() => {
  console.log(userDetails)   
  }, [userDetails])
   

const checkEmi = async() => {
let res = await axios.patch('')


}


const token = localStorage.getItem('token');

if(!token) {
return <Navigate to={'/login'} />
}


  return (
    <div>
      <div>
        <br /><label>Loan Amount</label>
        <br /><input
          type="text"
          value={userDetails.loanAmt}
          onChange={(e) => {
            setUserDetails({ ...userDetails, loanAmt: e.target.value });
          }}
          placeholder="Enter Loan Amount"
        />
       <br /> <label>Annual Interest Rate(%)</label>
      <br />  <input
          type="text"
          value={userDetails.rate}
          onChange={(e) => {
            setUserDetails({ ...userDetails, rate: e.target.value });
          }}
          placeholder="Enter Interest Rate"
        />
     <br />   <label>Tenure (in months)</label>
     <br />  <input
          type="text"
          value={userDetails.months}
          onChange={(e) => {
            setUserDetails({ ...userDetails, months: e.target.value });
          }}
          placeholder="Enter months"
        />
      </div>
      <div></div>
    </div>
  );
};

export default EmiPage;
