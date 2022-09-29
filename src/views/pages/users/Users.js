import users from "../login/Login";
import React from "react";
import { render } from "@testing-library/react";



const Users = () =>{


render() ;{

    const listItems = users.map((d) => <li key={d.username}>{d.username}</li>);

    return (
      <div>
      {listItems }
      </div>
    );
  }
}


export default Users