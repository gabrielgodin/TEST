import {useState} from 'react'
import axios from 'axios'
import Navbar from './componentes/navbar'
import List from './componentes/List'

function App() {
  const taskList =[
    {
      id:1,
      title: "soy la primera tarea",
      content: "Hola soy la primera tarea ",
      img: "",
    },
    {
      id: 2,
      title: "hacer el desayuno",
      content: "debes desayunar",
      img: "https://images.ecestaticos.com/G8-gUJ6nZX44fmN3KoIDwja5b_I=/239x71:2026x1410/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fdf5%2Ff64%2F3c6%2Fdf5f643c69ab51813e984c20a2d0228e.jpg",
    },
    {
      id:3,
      title: "alarma",
      content: "levantate ya es tarde",
      img: "",
    }
  ]
   
  
  
  const haveList =true;

  //1- Por medio del onChange setPost todo lo que escribamos lo mandamos al objeto post
  return (
    <div>
      <Route path="/" element={<App />}/>
      <Navbar></Navbar>
      
      <main className='main'>
        <div className='content'>
          <p>Somos  la nueva  generacion  de programadores {name}</p>
          <button>crear mota </button>
            {haveList &&  <List tasks={taskList}/>}
          
        
        </div>
      </main>
      <list />
    </div>
  )
}

export default App