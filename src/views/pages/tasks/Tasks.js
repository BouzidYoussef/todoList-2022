import React, { useState } from "react";
import Todos from "src/views/dashboard/Dashboard";
import jsonData from './data.json';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';



function TableData() {

  const [checked] = React.useState(false);

  const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2,
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 16,
        height: 16,
      },
      '&:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      '&:after': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 16,
      height: 16,
      margin: 2,
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
        control={<Android12Switch defaultChecked />}
        label={`${checked? 'OFF':'ON'}`}
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
