const Inicio = () => {
    return (
        <div className="container-fluid" >
    
        <div className="p-5 my-4 bg-light rounded-3" id="contenedor2">
          <h1>Banca virtual</h1>
          <p className="lead">Esta plataforma esta construida con herramientas de libre distribución, buscando simular la gestión de la información relacionada con los clientes de un banco y las transacciones que cotidianamente allí se pueden realizar.</p>
        </div>
        <h1>Integrantes</h1><br></br>
        <div className="row" id="contenedorcard">     
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <img className="card-img-top" src="imagenes/persona.png" alt=""/>
                <h5 className="card-title">Peter Parker</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div claclassNamess="card-body">
                <img className="card-img-top" src="imagenes/persona1.png" alt=""/>
                <h5 className="card-title">Peter Parker</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <img className="card-img-top" src="imagenes/persona1.png" alt=""/>
                <h5 className="card-title">Peter Parker</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div className="row" id="contenedorcard">     
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <img className="card-img-top" src="imagenes/persona1.png" alt=""/>
                <h5 className="card-title">Peter Parker</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <img className="card-img-top" src="imagenes/persona1.png" alt=""/>
                <h5 className="card-title">Peter Parker</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <img className="card-img-top" src="imagenes/persona1.png" alt=""/>
                <h5 className="card-title">Peter Parker</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
        </div>
        
        <hr/>
        <footer>
            <div className="row" id="contenedor2">
                <div className="col-md-6">
                    <p>Copyright &copy; 2022 Todos los derechos reservados.</p>
                </div>
                <div className="col-md-6 text-md-end">
                    <a href="/" className="text-dark">Términos de uso</a> 
                    <span className="text-muted mx-2">|</span> 
                    <a href="/" className="text-dark">Políticas de privacidad</a>
                </div>
            </div>
        </footer>
    </div>

    
    
    );
  };
  
  export default Inicio;
