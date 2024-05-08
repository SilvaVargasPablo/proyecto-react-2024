import { useEffect } from "react"

function App() {

  return (
    useEffect(() =>{
      fetch("api.coincap.io/v2/assets")
        .then((resp)  => resp.jason())
        .then((resp) => {
          console.log(data)
        })
        .catch(() => {
          console.error("la peticion fallo")
        })
    }, [])
    <h1>Lista de criptomonedas</h1>
  )
}

export default App
