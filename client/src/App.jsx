import {useState} from 'react'
import axios from 'axios'
import Navbar from './componentes/navbar'
import HomeTasks from "./paginas/HomeTasks"
import AddTask from "./paginas/AddTask"
import {Route, Routes } from "react-router-dom"
import List from './componentes/list'

function App() {
  return (
    <div>
      <Navbar/>
   
   <AddTask />
   <List />
    </div>
  )
}

export default App