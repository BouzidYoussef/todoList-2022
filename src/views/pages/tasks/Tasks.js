import React, { useState } from "react";
import Todos from "src/views/dashboard/Dashboard";
import jsonData from './data.json';


function TableData() {
  const [tasksData, setTaskData] = useState(jsonData);
  
  const tableRows = tasksData.map((info) => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.user}</td>
        <td>{info.task}</td>
        <td>{date}</td>
        <td>{info.description}</td>
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
            <th>Date</th>
            <th>Description</th>
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
