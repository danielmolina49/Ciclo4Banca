import swal from "sweetalert";
import axios from "axios";
import { useState,useEffect }  from "react";
import { useNavigate, useParams} from "react-router-dom";
//const URI = "http://localhost:8080/cuenta/"
//const URI1 = "http://localhost:8080/transaccion/"

const URI = "http://129.213.27.173:8080/banca58/cuenta/"
const URI1 = "http://129.213.27.173:8080/banca58/transaccion/"

//let headers = {
 //   "usuario" : sessionStorage.getItem("usuario"),
 //   "clave"   : sessionStorage.getItem("clave")
 // };
const Retiro = (props) => {
    let headers=props.headers
    //Para validar que el ususario este logueado
    const [cuentas, setCuentas] = useState([])
    useEffect(() =>{
        getCuentas()
    })
    const getCuentas = async () =>{
        try {
            
            const res = await axios({
                method : "GET",
                url : URI + "consulta_cuenta?idc="+sessionStorage.getItem("usuario"),
                headers: headers  
            });
                setCuentas(res.data)
        }
        catch (error) {
            swal("No tiene Acceso a esta Opción!", "Presiona el butón!", "error");
            navigate("/");
        }
    }



    const [id_cuenta, setId_cuenta] = useState("");
    const [fecha_apertura, setFecha_apertura] = useState("");
    const [saldo_cuenta, setSaldo_cuenta] = useState("");
    const [valor_retiro, setValor_retiro] = useState("");
    const navigate = useNavigate();

    const {id} = useParams()

    const editar = async (e) => {
        e.preventDefault();
        if (valor_retiro<=saldo_cuenta) {
            const UpdateCuenta= await axios({
                method: "PUT",
                url: URI + "retiro?idcta="+id_cuenta+"&valor_retiro="+valor_retiro,
                headers: headers 
              });
            
            const InsertTransaccion= await axios({
                method: "POST",
                url: URI1+"crear_transaccion?idcta="+id_cuenta+"&valor_transaccion="+valor_retiro+"&tipo=R",
                headers: headers 
              });
              
            navigate("/cuenta");
        } else {
            swal("Fondos Insuficientes!", "Presiona el butón!", "error");
            navigate("/");
        }
        
      };

      useEffect( ()=>{
        getCuentaById()
    })

    const getCuentaById = async () => {

        const res =  await axios({
            method: "GET",
            url: URI+"list/"+id,
            headers: headers 
          });
        //alert(URI+"list/"+id)
        setId_cuenta(res.data.id_cuenta)
        setFecha_apertura(res.data.fecha_apertura)
        setSaldo_cuenta(res.data.saldo_cuenta)
    }
    const salir = () => {
        navigate("/cuenta")
    }

    return(
        <div >
        <br></br>
        <h3>Retiro</h3>
        <div className="container col-6" id="contenedor2">
        <form onSubmit={editar} >
            <div className="mb-3">
                <label className="form-label">ID</label>
                <input 
                    id="id"
                    type="numeric" 
                    value={id_cuenta}
                    onChange={(e) => setId_cuenta(e.target.value)}
                    
                    disabled="false"
                    className="form-control"
                ></input>
            </div>
            <div className="mb-3">
            <label className="form-label">Fecha Apertura</label>
            <input 
                value={fecha_apertura.substring(0,10)}
                onChange={(e) => setFecha_apertura(e.target.value)}
                type="text"
                disabled="false"
                className="form-control"
            />
            </div>
            <div className="mb-3">
            <label className="form-label">Saldo Cuenta</label>
            <input 
                type="numeric" 
                value={saldo_cuenta}
                onChange={(e) => setSaldo_cuenta(e.target.value)}
                
                disabled="false"
                className="form-control"
            />
            </div>
            <div className="mb-3">
            <label className="form-label">Valor Retiro</label>
            <input 
                type="numeric" 
                value={valor_retiro}
                onChange={(e) => setValor_retiro(e.target.value)}
                
                required
                onInvalid={e => e.target.setCustomValidity('El campo Valor Retiro es obligatorio')}
                onInput={e => e.target.setCustomValidity('')}
                className="form-control"
            />
            </div>
            <button type="submit" className="btn btn-danger">
            Guardar
            </button>
            <button className="btn btn-success" type="button" onClick={salir} id="derecha">
                    Regresar
            </button>
        </form>
    </div>
    </div>
    );
};

export default Retiro;