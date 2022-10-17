import React, { useState } from "react";
import Todos from "src/views/dashboard/Dashboard";
import jsonData from './data.json';


function TableData() {
  const [tasksData, setTaskData] = useState(jsonData);
  const current = new Date();
  const moment = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const date = current.toLocaleTimeString()
  const tableRows = tasksData.map((info) => {
   
    return (
      <tr key={info.id.toString()}>
        <td>{info.id}</td>
        <td>{info.user}</td>
        <td>{info.task}</td>
        <td>{info.description}</td>
        <td>
        {date}
        <br />
        {moment}
        </td>
        <td>{info.status}</td>
      </tr>
    );
  });
  
  const addRows = (data) => {
    const totalTasks = tasksData.length;
    data.id = totalTasks + 1;
    const updateTaskData = [...tasksData];
    updateTaskData.push(data);
    setTaskData(updateTaskData);
  };
  
  return (
    <div>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>Id</th>
            <th>User</th>
            <th>Task</th>
            <th>Description</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <Todos func={addRows} />
    </div>
  );
}
export default TableData;
