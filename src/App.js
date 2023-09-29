import React from 'react'
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import Inicio from './components/paginas/Inicio'
import Rickandmorty from './components/paginas/Rickandmorty'
import Formulario from './components/paginas/Formulario'
import Usuario from './components/paginas/Usuarios'


const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/apirick' element={<Rickandmorty/>}/>
            <Route path='/formulario' element={<Formulario/>}/>
            <Route path='/usuario' element={<Usuario/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
