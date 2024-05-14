import { useState } from "react"
import { useEffect } from "react"

function App() {

  const [criptos, setCriptos] = useState([]) 

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then((resp) => resp.json())
      .then((data) => {
        setCriptos(data.data)
      })
      .catch(() =>{
        console.error("Lapeticion falló")
      })
    
  }, [])

  return (
    <>
      <h1> Lista de criptomonedas </h1>
      <ol>
        { criptos.map(({name, priceUsd}) => ( 
         <li>Name:{name} Price:{priceUsd}</li>
        )) }
      </ol>
    </>
  )
}

export default App
