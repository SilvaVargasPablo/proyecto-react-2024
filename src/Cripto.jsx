const Cripto = ({name, priceUsd}) => {
  return(
    <div>
      <h3>{name}</h3>
      <div className="info">
        <p><span className="label">Precio: </span>{priceUsd}</p>
      </div>    
    </div>
  )
}

export default Cripto