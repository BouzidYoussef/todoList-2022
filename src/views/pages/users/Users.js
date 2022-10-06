import React from "react";
import { render } from "@testing-library/react";
import option from "../../dashboard/Dashboard"



const Users = () =>{
  const listItems = option.map((person, index) => (
    <li >{person.name}</li>
  ))

render() ;{


    return (
      <div>
      {listItems }
      </div>
    );
  }
}


export default Users