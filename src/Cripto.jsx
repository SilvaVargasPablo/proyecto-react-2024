import"./Cripto.css"

const Cripto = ({name, rank, vwap24Hr, priceUsd}) => {
  return(
    <div className="cripto">
      <h2>{name}</h2>
      <div className="info">
        <p><span className="label">Precio: </span>{priceUsd}</p>
        <p><span className="label">Ranking: </span>{rank}</p>
        <p><span className="label">24hrs: </span>{vwap24Hr}</p>
      </div>    
    </div>
  )
}

export default Cripto