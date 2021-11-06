let container = document.getElementById("seccion");

const comprarTickets =()=>{
    container.innerHTML=`
    <div class="container">
        
        <div class="card-group carta">
                
            <div class="col-sm-4">
                <div class="card" >
                    <div class="card-body border border-primary mr-1"> 
                        <h5 class="card-title text-center">Estudiantes</h5>
                        <p class="card-text text-center">Tienen un descuento</p>
                        <p class="card-title text-center font-weight-bold">80%</p>
                        <p class="card-text text-center"><small class="text-muted">* presentar documentación</small></p>
                    </div>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body border border-primary mr-1"> 
                        <h5 class="card-title text-center">Trainee</h5>
                        <p class="card-text text-center">Tienen un descuento</p>
                        <p class="card-title text-center font-weight-bold">50%</p>
                        <p class="card-text text-center"><small>* presentar documentación</small></p>
                    </div>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body border border-primary mr-1"> 
                        <h5 class="card-title text-center">Junior</h5>
                        <p class="card-text text-center">Tienen un descuento</p>
                        <p class="card-title text-center font-weight-bold">15%</p>
                        <p class="card-text text-center"><small>* presentar documentación</small></p>
                    </div>
                </div>
            </div>

        </div>   
            
        <div class="row">
            <div class="col text-uppercase text-center">
                <small>Venta</small>
                <h2>Valor de ticket $200</h2>
            </div>
        </div>
        
        <form>
            <div class="row">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Nombre">
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Apellido">
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <label for="">Correo</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Correo">      
                </div>    
             </div>

             
            <div class="row">
                <div class="col">
                    <label for="">Cantidad</label>
                    <input id="cantidadEntradas" type="text" class="form-control" value = "1" onChange="imprimirValor()" placeholder="Cantidad"/>
                </div>
                <div class="col">
                <label for="">Categoria</label>
                <select class="form-select" id = "id_categoria"  name="id_categoria" onChange="imprimirValor()">
                    <option value="80">Estudiante</option>
                    <option value="50">Trainee</option>
                    <option value="15">Junior</option>
                </select>
                </div>
            </div>           

        </form>
                        
                
        <div class="form-row"> 
            <div class="alert alert-primary total_a_pagar" role="alert">
            <label id="label_cant_pagar" >Cantidad a pagar: $40</label>
            </div>
        </div>
                    
        <div class="form-row d-flex">
            <button class="btn btn-lg btn-primary col-6 m-1">Borrar</button>
            <button class="btn btn-lg btn-primary col-6 m-1" onclick="Totalapagar()">Resumen</button>        
        </div>
            
    </div>`;
};

