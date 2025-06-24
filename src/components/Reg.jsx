import React from 'react'
import {TextField,Button} from "@mui/material";
const Reg = () => {
  return (
    <div className='box'>
       <TextField variant="outlined" label='Name'/><br></br>
       <TextField variant="outlined" label='Place'/><br></br>
       <TextField variant="outlined" label='Age'/><br></br>
       <TextField variant="outlined" label='Username'/><br></br>
       <TextField variant="outlined" label='Password'/><br></br>
       <Button variant="contained">Submit</Button>
    </div>
  )
}

export default Reg
