import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var name= "diya";
    var [fname,setFname]= useState("Catherine");
const change =()=>{
    setFname("gf")
}
  return (
    <div>
        <Typography variant="h5">Welcome {fname}</Typography>
        <Button variant="contained" onClick={()=>{setFname("HLOO")}}>change</Button>
        <br></br>
        <Button variant="contained" onClick={change}>change</Button>
    </div>
  )
}

export default Statebasics
