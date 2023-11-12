import axios from "axios";
import { useEffect, useState } from "react";

import React from "react";

export const UserList = () => {
  const [listOfUSer, setListOfUSer] = useState(); //our user list
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users") // mount
      .then((a) => {
        setListOfUSer(a.data);
        console.log(a.data);
      })
      .catch((error) => console.log(error)); // error condition
  },[]);
  return <div className="box">
    {listOfUSer ? (
    listOfUSer.map((el) => (
      <div className="boxINt">
        <h1 style={{ color: "black" }}>UserName:</h1> <h2 style={{fontFamily: 'Edu TAS Beginner', 
}}>{el.username}</h2>{" "}

      </div>
    ))
  ) : (
<div ><div>loading</div></div>        )}</div>;
};
