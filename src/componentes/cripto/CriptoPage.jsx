import { useParams } from "react-router-dom"

const CriptoPage = () => {
  const params = useParams()

  return(
    <h1>Soy una cripto moneda {params.id}</h1>
  )
}

export default CriptoPage