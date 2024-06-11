import { createContext, useEffect, useState } from "react";

const UserContext = createContext()

const UserContextProvider = ({ children }) => {

  const [ usuario, setUsuario ] = useState({})
  useEffect(() => {
    setUsuario({
      name: "Randy Marsh",
      registered: "12/Mayo/2002"
    })
  }, [])

  return (
    <UserContext.Provider value={usuario} >
      { children }
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider }