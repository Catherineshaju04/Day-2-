import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First'
import Reg from './components/Reg'
import DataTable from './components/DataTable'
import DataCard from './components/DataCard'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Statebasics from './components/Statebasics'
import { Task } from '@mui/icons-material'
import AddMovie from './components/AddMovie'
import ViewMovie from './components/ViewMovie'
import Navbarg from './components/Navbarg'

function App() {
  

  return (
    <>
      {/* <h1>Catherine Shaju K</h1> */}
      {/* <First/> */}
      {/* <Reg/> */}
      {/* <DataTable/>  */}
      {/* <DataCard/> */}
      <Navbarg/>
      <Routes>
        <Route path="/" element={<First/>}/>
        <Route path="/r" element={<Reg/>}/>
        <Route path="/t" element={<DataTable/>}/>
        <Route path="/y" element={<DataCard/>}/>
        <Route path="/h" element={<Statebasics/>}/>
        <Route path="/k" element={<Task/>}/>
        <Route path="/a" element={<AddMovie/>}/>
        <Route path="/v" element={<ViewMovie/>}/>
        
       
      </Routes>
    </>
  )
}

export default App
