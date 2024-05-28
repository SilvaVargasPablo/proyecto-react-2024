import { Link } from "react-router-dom"

const Home = () =>{
  return(
    <>
      <h1>Hola , vienbenidos a EdMarket</h1>
      <p>Conoce las 100 criptomonedas más usadas</p>
      <Link to="/criptomonedas">Ver criptomondas</Link>
    </>
  )
}


export default Home