import { Link } from "react-router-dom"
import"./Cripto.css"

const Cripto = ({id, name, symbol, changePercent24Hr, priceUsd, rank}) => {
  return(
    <Link to={`/criptomonedas/${id}`}>
    <div className="cripto">
      <h2>{name}</h2>
      <div className="info">
        <p><span className="label">Rank: </span>{rank}</p>
        <p className="precio"><span className="label">Precio: </span>{parseFloat (priceUsd).toFixed(4)}</p>
        <p><span className="label">Codigo: </span>{symbol}</p>
        
        <p>
          <span className="label">24Hrs: </span>
          <span className={parseFloat(changePercent24Hr) > 0 ? "positivo" : "negativo"}>
          {parseFloat (changePercent24Hr).toFixed(3)}%
          </span>
        </p>
        
      </div>    
    </div>
    </Link>
  )
}

export default Cripto