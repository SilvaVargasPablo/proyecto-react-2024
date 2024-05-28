import { useState } from "react"
import { useEffect } from "react"
import "./Cuadricula.css"
import axios from "axios"
import Cripto from "./cripto/Cripto"

function Cuadricula() {

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
          criptos.map(({id, symbol, changePercent24Hr, name, priceUsd, rank}) => ( 
            <Cripto 
            key={id} 
            rank={rank} 
            symbol={symbol} 
            changePercent24Hr={changePercent24Hr} 
            name={name} 
            priceUsd={priceUsd}
            id={id}
            />
          )) 
        }
      </div> 
    </div>
  )
}

export default Cuadricula
