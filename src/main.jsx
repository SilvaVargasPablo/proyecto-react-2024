import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './componentes/App'
import "./main.css"
import Saludo from './componentes/Saludo'
import Pagina404 from './componentes/404'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes> 
    <Route path='/' element={<App/>}/>
    <Route path='*' element={<Pagina404/>}/>
    <Route path='/saludo' element={<Saludo/>}/>
  </Routes>
  </BrowserRouter>
)
