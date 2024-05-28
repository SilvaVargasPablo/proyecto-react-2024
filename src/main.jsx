import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Pagina404 from './componentes/404'
import App from './componentes/App'
import "./main.css"
import Cuadricula from './componentes/Cuadricula'
import Home from './Home'
import CriptoPage from './componentes/cripto/CriptoPage'

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
        </Route>

        <Route path='criptomonedas' element={<App/>}>
          <Route index element={<Cuadricula/>}/>
          <Route path=':id' element={<CriptoPage/>}/>
        </Route>
        
        <Route path='*' element={<Pagina404/>}/>
          
      </Routes>
    </BrowserRouter>

)
