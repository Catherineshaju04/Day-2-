import React from 'react'
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Typography, Paper
} from '@mui/material'

const ViewMovie = () => {
  // Dummy movie data
  const movieList = [
    {
      name: 'Inception',
      director: 'Christopher Nolan',
      actors: 'Leonardo DiCaprio',
      year: 2010
    },
    {
      name: 'Interstellar',
      director: 'Christopher Nolan',
      actors: 'Matthew McConaughey',
      year: 2014
    }
  ]

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>🎬 Movie List</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Movie</strong></TableCell>
              <TableCell><strong>Director</strong></TableCell>
              <TableCell><strong>Lead Actors</strong></TableCell>
              <TableCell><strong>Year</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movieList.map((movie, index) => (
              <TableRow key={index}>
                <TableCell>{movie.name}</TableCell>
                <TableCell>{movie.director}</TableCell>
                <TableCell>{movie.actors}</TableCell>
                <TableCell>{movie.year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ViewMovie
