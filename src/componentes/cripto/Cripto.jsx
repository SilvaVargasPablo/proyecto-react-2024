import { Link } from "react-router-dom"
import"./Cripto.css"

const Cripto = ({id, name, symbol, changePercent24Hr, priceUsd}) => {
  return(
    <div className="cripto">
      <Link to={`/criptomonedas/${id}`}><h2>{name}</h2></Link>  
      <div className="info">
        <p><span className="label">Precio: </span>{parseFloat (priceUsd).toFixed(4)}</p>
        <p><span className="label">Codigo: </span>{symbol}</p>
        <p>
          <span className="label">24Hrs: </span>
          <span className={parseFloat(changePercent24Hr) > 0 ? "positivo" : "negativo"}>
            {parseFloat (changePercent24Hr).toFixed(3)}%
          </span>
        </p>
      </div>    
    </div>
  )
}

export default Cripto