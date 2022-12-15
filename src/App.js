//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//Aca importamos nuestros componentes
import {CompCrearUsuario} from './Componentes/CrearUsuario.jsx'
import {CompShowUsers} from './Componentes/MostrarUsuarios.jsx'
import {Navbareventos} from './Componentes/NavBar.jsx'
import {Logo} from './Componentes/Logo.jsx'
import {CompCrearEvento} from './Componentes/CrearEvento.jsx'
import {CompMostrarEventos} from './Componentes/MostrarEventos.jsx'
import {CompEditarEventos} from './Componentes/EditarEventos.jsx'
import {CompEditarUsuario} from './Componentes/EditarUsuario.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
     
     </header>
     <BrowserRouter>
                      <Routes>
                      <Route path='/' element= {<Navbareventos />} >
                              <Route path='/usuarios' element= {<CompShowUsers />} />   
                              <Route path='/create' element= {<CompCrearUsuario />} />
                              <Route path='/editarusuario/:id' element= {<CompEditarUsuario />} />
                              <Route path='/crearevento' element= {<CompCrearEvento />} /> 
                              <Route path='/mostrareventos' element= {<CompMostrarEventos />} />
                              <Route path='/editareventos/:id' element= {<CompEditarEventos />} />   
                      </Route> 
                         
                     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
