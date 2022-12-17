import { Link, useNavigate } from "react-router-dom";
import Cuenta from "../componentes/Cuenta"
import Deposito from "../componentes/Deposito"
import Retiro from "../componentes/Retiro"
import Movimiento from "../componentes/Movimiento"
import swal from "sweetalert"

let headers = {
  "usuario" : sessionStorage.getItem("usuario"),
  "clave"   : sessionStorage.getItem("clave")
};

const Menu = (props) => {
  
  const navigate = useNavigate();
  const salir = () => {
      sessionStorage.clear()
      navigate("/")
  }
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 list-group-horizontal" >
          <li className="nav-item list-group-item" id="barra2">
            <a className="nav-link active" aria-current="page" href="/inicio">
              Inicio
            </a>
          </li>
         
          <li className="nav-item list-group-item" id="barra2">
          <li className="nav-item">
            <Link to="/cuenta" className='btn btn-dark'>Operaciones</Link>
            </li>
            
          </li>
        </ul>
        </div>
        <div class="navbar-nav ms-auto">  
                
                <a href="#" className="nav-item nav-link" onClick={salir}><i class="fa-solid fa-power-off"></i></a>
            </div>
        </div>
      
        </div>
     </nav>
   <div>
          {
                
            props.ruta==="cuenta"? <Cuenta headers={headers}/>:""
                
          }
          {
                props.ruta==="deposito"? <Deposito headers={headers}/>:""
          }
          {
                props.ruta==="retiro"? <Retiro headers={headers}/>:""
          }
          {
                props.ruta==="movimiento"? <Movimiento headers={headers}/>:""
          }
      </div>
      </div>
        

    );
  };
  
  export default Menu;
