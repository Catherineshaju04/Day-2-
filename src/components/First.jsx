import React from 'react'
import {TextField,Typography,Button} from "@mui/material";

const First = () => {
  return (
    <div>
      <h1>Welcome to React!!</h1>
      <label for="">Name:</label>
      <input type="text" placeholder="Enter your name"/>
      <br></br>
      <label for="">Password:</label>
      <input type="password" placeholder="Enter your password"/>
      <br></br>
     <center><button>Submit</button></center>
     <Typography variant='h1'>Welcome to React!!</Typography>
     <br></br>
     <TextField variant="outlined" label='username'/>
     <br></br>
     <TextField variant="filled" label='username'/>
     <br></br>
     <TextField variant="standard" label='username'/>
     <br></br>
     <Button variant="text">Login</Button>&nbsp;<br></br>
     <Button variant="contained">Login</Button>&nbsp;<br></br>
     <Button variant="outlined">Login</Button>
    </div>
  )
}

export default First
