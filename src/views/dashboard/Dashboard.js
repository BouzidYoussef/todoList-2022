import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import "./style.css";
import Select from 'react-select';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import TableData from '../pages/tasks/Tasks';



var option = [
  { value: 'youssef', label: 'Youssef', key:1 },
  { value: 'ahmed', label: 'Ahmed', key:2 },
  { value: 'mohammed', label: 'Mohammed', key:3},
  { value: 'anis', label: 'Anis', key:4},
  { value: 'louay', label: 'Louay', key:5},
  { value: 'kais', label: 'Kais', key:6}
]

function TodoForm(props) {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [user, setUser] = useState('');

  const changeTask = (event) => {
    setTask(event.target.value);
  };

  const changeUser = (event) =>{
    setUser(event.label)
  };
  
  const changeDescription = (event) => {
    setDescription(event.target.value);
  };
  
  const transferValue = (event) => {
    event.preventDefault();
    const val = { 
      task,
      description,
      user
    };
    props.func(val);
    clearState();
  };
  
  const clearState = () => {
    setTask('');
    setDescription('');
  };
  
  return (
    <div>
      <label>User:</label>
      <Select className="choices" options={option}  onChange={changeUser} autoFocus/>
      <label>Task:</label>
      <TextField className='input-mui' type="text" value={task} onChange={changeTask} autoFocus variant="outlined" />
      <label>Description:</label>
      <TextField className='input-mui' type="text" value={description} onChange={changeDescription} autoFocus  variant="outlined"/>
      <Button onClick={transferValue} autoFocus variant='primary' type="submit">Submit</Button>
    </div>
  );
}


        export default TodoForm;