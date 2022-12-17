const Nombre = () => {
    //var nombre2 = "";
    //if (!sessionStorage.getItem("nombre") == null) {
        //nombre2=sessionStorage.getItem("nombre");
    //}
    return (
      <nav className="navbar navbar-expand-sm bg-light" id="contenedor4">
        <div className="collapse navbar-collapse justify-content-end">
       <i className="fa-solid fa-user"></i> &nbsp; {sessionStorage.getItem("nombre")} 
        </div>
    </nav>
    );
  };
  
  export default Nombre;


