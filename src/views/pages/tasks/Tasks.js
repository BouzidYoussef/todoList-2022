import React, { useState } from "react";
import Todos from "src/views/dashboard/Dashboard";
import jsonData from './data.json';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';



function TableData() {

const [checked] = React.useState(false)

  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));
    
  const [tasksData, setTaskData] = useState(jsonData);
  const current = new Date();
  const moment = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const date = current.toLocaleTimeString()
  const tableRows = tasksData.map((info, i) => {
    
    return (
      <tr key={i}>
        <td>{info.id}</td>
        <td>{info.user}</td>
        <td>{info.task}</td>
        <td>{info.description}</td>
        <td>
        {date}
        <br />
        {moment}
        </td>
        <td>
        <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} label={checked? "yes" : "no"} />}
      />
        </td>
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
            <th>Created At</th>
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
