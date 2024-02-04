import { useState } from 'react'
import './App.css'
import { Toaster } from 'react-hot-toast';  
import Routers from './Routes/Routes'; 


function App() {

  return (
    <>
      <Toaster  position="top-center"  reverseOrder={false} />
      <Routers/>

    </>
  )
}

export default App
