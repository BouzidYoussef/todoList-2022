import React, { useState } from "react";
import Todos from "src/views/dashboard/Dashboard";
import jsonData from './data.json';
import {CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell} from '@coreui/react';
import { Button} from 'react-bootstrap';



function TableData() {

  const [tasksData, setTaskData] = useState(jsonData);
  const current = new Date();
  const moment = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const date = current.toLocaleTimeString()
  const tableRows = tasksData.map((info, i) => {
    
    return (
      <CTableBody color="light">
      <CTableRow key={info.id}>
        <CTableHeaderCell scope="row">{info.id}</CTableHeaderCell>
        <CTableDataCell className="row-row">{info.user}</CTableDataCell>
        <CTableDataCell className="row-row">{info.task}</CTableDataCell>
        <CTableDataCell className="row-row">{info.description}</CTableDataCell>
        <CTableDataCell className="row-row">
          {date}
          <br />
          {moment}
        </CTableDataCell>
        <CTableDataCell>
        <Button className="row-row" variant="outline-success" onClick={() => markTodo(i)}>✓</Button>{' '}
        <Button className="row-row" variant="outline-danger" onClick={() => removeTodo(i)}>✕</Button>
        </CTableDataCell>
      </CTableRow>
    </CTableBody>
    );
  });

  const markTodo = index => {
    const newTodos = [...tasksData];
    newTodos[index].isDone = true;
    setTaskData(newTodos);
  };


  const removeTodo = index => {
    const newTodos = [...tasksData];
    newTodos.splice(index, 1);
    setTaskData(newTodos);
  };
  
  const addRows = (data) => {
    const totalTasks = tasksData.length;
    data.id = totalTasks + 1;
    const updateTaskData = [...tasksData];
    updateTaskData.push(data);
    setTaskData(updateTaskData);
  };
  
  return (
      <CTable striped>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell scope="col">Id</CTableHeaderCell>
          <CTableHeaderCell scope="col">User</CTableHeaderCell>
          <CTableHeaderCell scope="col">Task</CTableHeaderCell>
          <CTableHeaderCell scope="col">Description</CTableHeaderCell>
          <CTableHeaderCell scope="col">Created At</CTableHeaderCell>
          <CTableHeaderCell scope="col">Status</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
    <CTableBody>{tableRows}</CTableBody><Todos func={addRows} />
    </CTable> 
  );
}
export default TableData;
