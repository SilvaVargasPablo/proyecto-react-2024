import "./Cuadricula.css"
import Cripto from "./cripto/Cripto"
import usePetition from "../hooks/usePetition"

function Cuadricula() {

  const [criptos] = usePetition("assets")

  if (!criptos) return <span> Cargando...</span>

  return (
    <div className="grid-container">
      <h1> Lista de criptomonedas </h1>
      <div className="cripto-container">     
        { 
          criptos.map(({id, symbol, changePercent24Hr, name, priceUsd}) => ( 
            <Cripto 
            key={id}  
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
