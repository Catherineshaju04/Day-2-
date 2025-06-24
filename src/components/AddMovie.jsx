import React from 'react'
import { TextField, Button } from '@mui/material'

const AddMovie = () => {
  return (
    <div className='box'>
      <h2>Add Movie</h2>
      <TextField variant="outlined" label="🎬 Movie Name" fullWidth margin="normal" /><br />
      <TextField variant="outlined" label="🎬 Director" fullWidth margin="normal" /><br />
      <TextField variant="outlined" label="🎬 Lead Actors" fullWidth margin="normal" /><br />
      <TextField variant="outlined" label="📅 Year of Release" fullWidth margin="normal" /><br />
      <Button variant="contained" color="primary">Submit</Button>
    </div>
  )
}

export default AddMovie
