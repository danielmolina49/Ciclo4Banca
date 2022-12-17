import swal from "sweetalert"
import axios from "axios";
import { useState,useEffect }  from "react";
import { useNavigate, useParams} from "react-router-dom";
//const URI = "http://localhost:8080/transaccion/"
const URI = "http://129.213.27.173:8080/banca58/transaccion/"


//let headers = {
 //   "usuario" : sessionStorage.getItem("usuario"),
 //   "clave"   : sessionStorage.getItem("clave")
 // };

const MostrarTransaccion = (props) => {
    let headers=props.headers
    const navigate = useNavigate();
    const [transacciones, setTransacciones] = useState([])
    useEffect(() =>{
        getTransacciones()
    })
    const {id} = useParams()
    const getTransacciones = async () =>{
        try {
            const res = await axios({
                method : "GET",
                url : URI + "consulta_transaccion?idcta="+id,
                headers: headers 
               
            });
            
            setTransacciones(res.data)
        }
        catch (error) {
            swal("No tiene Acceso a esta Opción!", "Presiona el butón!", "error");
            navigate("/");
        }
    }
    const salir = () => {
        navigate("/cuenta")
    }
    
return(
    <div className='container'>
    <br></br> 
    <h3>Movimientos</h3> 

    <br></br>
    <div className='row'>
        <div className='col'>
            
            <table className='table table-striped table-hover' id="tabMovimientos">
                <thead className="table-dark">
                    <tr>
                        <th>Id</th>
                        <th>Fecha</th>
                        <th>Valor</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    { transacciones.map ( (transaccion) => (
                        <tr key={ transaccion.id_transaccion}>
                            <td> { transaccion.id_transaccion } </td>
                            <td> { transaccion.fecha_transaccion.substring(0,10) } </td>
                            <td> { transaccion.valor_transaccion } </td>
                            <td> { transaccion.tipo_transaccion } </td>
                            
                        </tr>
                    )) }
                </tbody>
            </table>
            <button className="btn btn-success" type="button" onClick={salir} id="derecha">
                    Regresar
            </button>
        </div>    
    </div>
</div>


    );
};

export default MostrarTransaccion;