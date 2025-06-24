import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Task = () => {
    var[name,setFname]=useState("")
  return (
    <div>
      <Typography variant="h3">Welcome{name}</Typography>
      <br />
      <br />
      <Button variant="contained">Gallery</Button>&nbsp;&nbsp;
      <Button variant="contained">Home</Button>&nbsp;&nbsp;
      <Button variant="contained">Contact</Button>&nbsp;&nbsp;
    </div>
  );
};

export default Task
