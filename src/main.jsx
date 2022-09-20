import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './componentes/App'
import Home from './componentes/Home'
import Cuadricula from './componentes/Cuadricula'
import CriptoPage from './componentes/cripto/CriptoPage'
import Pagina404 from './componentes/404'
import "./main.css"
import { UserContextProvider } from './context/UserContext'
import Perfil from "./componentes/usuarios/Perfil"
import Login from './componentes/usuarios/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
        </Route>
        <Route path="/criptomonedas" element={<App />}>
          <Route index element={<Cuadricula />} />
          <Route path=":id" element={<CriptoPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  </UserContextProvider>
)
