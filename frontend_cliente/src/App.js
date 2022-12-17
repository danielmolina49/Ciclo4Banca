//import logo from './logo.svg';
import './App.css';
import Menu from './componentes/Menu';
//import Nombre from './componentes/Nombre';
import Login from './componentes/Login'
//import Cuenta from './componentes/Cuenta'
//import Inicio from './componentes/Inicio'
//import Deposito from "./componentes/Deposito"
//import Logout from './componentes/Logout'
//import Retiro from "./componentes/Retiro"
//import Movimiento from "./componentes/Movimiento"
//import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Route, Routes,HashRouter} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <div className='App-header' >
       {/*  <Menu/>
        <Nombre/> */}
      </div>
      <HashRouter>
         <Routes>
            <Route path="/menu" element={<Menu />} />
            <Route path="/cuenta" element={<Menu ruta="cuenta"  />} />
            <Route path="/deposito/:id" element={<Menu ruta="deposito"  />} />
            <Route path="/retiro/:id" element={<Menu ruta="retiro"  />} />
            <Route path="/movimiento/:id" element={<Menu ruta="movimiento"  />} />
            <Route path="/" element={<Login />} />
            
            {/*
            <Route path="/logout" element={<Logout />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/deposito/:id" element={<Deposito />} />
            <Route path="/retiro/:id" element={<Retiro />} />
            <Route path="/movimiento/:id" element={<Movimiento />} /> */}
           {/* <Route path="/principal" element={<Menu />} /> */}
          </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
