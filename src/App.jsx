import { useState } from "react"
import { useEffect } from "react"
import "./App.css"
import axios from "axios"
import Cripto from "./Cripto"

function App() {

  const API_URL = import.meta.env.VITE_API_URL
  const [criptos, setCriptos] = useState() 
  

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => {
        setCriptos(data.data.data)
      })
      .catch(() =>{
        console.error("La peticion falló")
      })
    
  }, [])

  if (!criptos) return <span> Cargando...</span>

  return (
    <div className="app-container">
      <h1> Lista de criptomonedas </h1>
      <div className="cripto-container">     
        { 
          criptos.map(({id, name, priceUsd}) => ( 
            <Cripto key={id} name={name} priceUsd={priceUsd} />
          )) 
        }
      </div> 
    </div>
  )
}

export default App
