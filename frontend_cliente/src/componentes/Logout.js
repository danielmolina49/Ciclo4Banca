import swal from "sweetalert";
import { useNavigate } from "react-router-dom";


const Logout = () => {
    
    sessionStorage.removeItem("usuario")
    sessionStorage.removeItem("clave")
    sessionStorage.removeItem("nombre");
    const navigate = useNavigate();
    swal("Sesión Finalizada!", "Presiona el botón!", "success");
        navigate("/");

    
    return (
        

        <div className='container'>
        <br>
        </br>
           <p>Sesión Cerrada</p>
           
        </div>



    );
  };
  
  export default Logout;
