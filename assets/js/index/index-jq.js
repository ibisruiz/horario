$(document).ready(function () {

    let valueNombre = "";
    let valueProvincia = "";
    let valueCiudad = "";
    let valueSector = "";
    let valueCalle = "";
    let valueCarrera = "";

    let materia1 = "";
    let materia2 = "";
    let materia3 = "";
    let materia4 = "";
    let materia5 = "";

    let radio1 = "";
    let radio2 = "";
    let radio3 = "";
    let radio4 = "";
    let radio5 = "";

    // botones

    $("#secondary-container").on("click", "#btnregistrar", function () {
        Creating();
    });

    $("#secondary-container").on("click", "#btnlimpiar", function () {
        Clear();
    });

    $("#secondary-container").on("click", ".materiasBtn", function () {
        radio1 = $("#materia1radio input[type='radio']:checked").val();
        radio2 = $("#materia2radio input[type='radio']:checked").val();
        radio3 = $("#materia3radio input[type='radio']:checked").val();
        radio4 = $("#materia4radio input[type='radio']:checked").val();
        radio5 = $("#materia5radio input[type='radio']:checked").val();
        
        ConfirmacionHorario();
    });

    $("#secondary-container").on("click", ".finalizarConfBTN", function(){

        HtmlDatos();
        Clear();
    });

    $("#secondary-container").on("click", ".navDP", function(){

        HtmlDatos();
    });

    $("#secondary-container").on("click", ".navSH", function () {
        navHorario();
    });

    // funciones

    function GenerateHTMLHorarioProg() {

        const htmlHorarioProg = `
        <div>

        <!-- materia inicio -->

        <ul class="nav">
        <li class="nav-item">
          <a class="nav-link navDP" aria-current="page" href="#">Datos Personales ►</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Seleccion Horario ►</a>
        </li>
        </ul>

        <div class="card-header headerstyle text-primary materiasHeader"><h3> Seleccion Materias ~ ${valueCarrera} </h3></div>
        
        <div class="accordion" id="accordionExample">

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Programacion 1
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body" id="materia1radio">

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="prog1" id="prog1Lun" value="Lun: 12PM" checked>
                            <label class="form-check-label" for="prog1Lun">
                            Lun: 12PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="prog1" id="prog1Mar" value="Mar: 2PM">
                            <label class="form-check-label" for="prog1Mar">
                            Mar: 2PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="prog1" id="prog1Mie" value="Mie: 3PM">
                            <label class="form-check-label" for="prog1Mie">
                            Mie: 3PM
                            </label>
                        </div>   

                    </div>                            
                </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Programacion 2
                </button>
              </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body" id="materia2radio">

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="prog2" id="prog2Lun" value="Lun: 1PM" checked>
                            <label class="form-check-label" for="prog2Lun">
                            Lun: 1PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="prog2" id="prog2Mar" value="Mar: 3PM">
                            <label class="form-check-label" for="prog2Mar">
                            Mar: 3PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="prog2" id="prog2Mie" value="Mie: 5PM">
                            <label class="form-check-label" for="prog2Mie">
                            Mie: 5PM
                            </label>
                        </div>                       
                    

                    </div>    
                </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Programacion 3
                </button>
              </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body" id="materia3radio">

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="prog3" id="prog3Lun" value="Lun: 2PM" checked>
                            <label class="form-check-label" for="prog3Lun">
                            Lun: 2PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="prog3" id="prog3Mar" value="Mar: 4PM">
                            <label class="form-check-label" for="prog3Mar">
                            Mar: 4PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="prog3" id="prog4Mie" value="Mie: 6PM">
                            <label class="form-check-label" for="prog4Mie">
                            Mie: 6PM
                            </label>
                        </div>   
                
                    </div>
                </div>
            </div>


            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Programacion 4
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body" id="materia4radio">

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="prog4" id="prog4Lun" value="Lun: 3PM" checked>
                            <label class="form-check-label" for="prog4Lun">
                            Lun: 3PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="prog4" id="prog4Mar" value="Mar: 5PM">
                            <label class="form-check-label" for="prog4Mar">
                            Mar: 5PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="prog4" id="prog4Mie" value="Mie: 7PM">
                            <label class="form-check-label" for="prog4Mie">
                            Mie: 7PM
                            </label>
                        </div>   
                 
                    </div>
                </div>
            </div>


            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Programacion 5
                  </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div class="accordion-body" id="materia5radio">

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="prog5" id="prog5Lun" value="Lun: 4PM" checked>
                            <label class="form-check-label" for="prog5Lun">
                            Lun: 4PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="prog5" id="prog5Mar" value="Mar: 6PM" >
                            <label class="form-check-label" for="prog5Mar">
                            Mar: 6PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="prog5" id="prog5Mie" value="Mie: 8PM">
                            <label class="form-check-label" for="prog5Mie">
                            Mie: 8PM
                            </label>
                        </div> 
                 
                    </div>
                </div>
            </div>

            <button type="button" class="btn btn-dark materiasBtn">Siguiente</button>

        </div>
         <!-- materias fin -->     
</div>
        `;

        $("#secondary-container").html(htmlHorarioProg);
    }

    function GenerateHTMLHorarioRedes() {

        const htmlHorarioRedes = `
        <div>

        <!-- materia inicio -->
        
        <ul class="nav">
        <li class="nav-item">
          <a class="nav-link navDP" aria-current="page" href="#">Datos Personales ►</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Seleccion Horario ►</a>
        </li>
        </ul>

        <div class="card-header headerstyle text-primary materiasHeader"><h3>Seleccion Materias ~ ${valueCarrera} </h3></div>
        
        <div class="accordion" id="accordionExample">

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    CCNA 1
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body" id="materia1radio">

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="ccna1" id="ccna1Lun" value="Lun: 12PM" checked>
                            <label class="form-check-label" for="ccna1Lun">
                            Lun: 12PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="ccna1" id="ccna1Mar" value="Mar: 2PM">
                            <label class="form-check-label" for="ccna1Mar">
                            Mar: 2PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="ccna1" id="ccna1Mie" value="Mie: 3PM">
                            <label class="form-check-label" for="ccna1Mie">
                            Mie: 3PM
                            </label>
                        </div>   

                    </div>                            
                </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  CCNA 2
                </button>
              </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body" id="materia2radio">

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="ccna2" id="ccna2Lun" value="Lun: 1PM" checked>
                            <label class="form-check-label" for="ccna2Lun">
                            Lun: 1PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="ccna2" id="ccna2Mar" value="Mar: 3PM">
                            <label class="form-check-label" for="ccna2Mar">
                            Mar: 3PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="ccna2" id="ccna2Mie" value="Mie: 5PM">
                            <label class="form-check-label" for="ccna2Mie">
                            Mie: 5PM
                            </label>
                        </div>                       
                    

                    </div>    
                </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  CCNA 3
                </button>
              </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body" id="materia3radio">

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="ccna3" id="ccna3Lun" value="Lun: 2PM" checked>
                            <label class="form-check-label" for="ccna3Lun">
                            Lun: 2PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="ccna3" id="ccna3Mar" value="Mar: 4PM">
                            <label class="form-check-label" for="ccna3Mar">
                            Mar: 4PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="ccna3" id="ccna3Mie" value="Mie: 6PM">
                            <label class="form-check-label" for="ccna3Mie">
                            Mie: 6PM
                            </label>
                        </div>   
                
                    </div>
                </div>
            </div>


            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    CCNA 4
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body" id="materia4radio">

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="ccna4" id="ccna4Lun" value="Lun: 3PM" checked>
                            <label class="form-check-label" for="ccna4Lun">
                            Lun: 3PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="ccna4" id="ccna4Mar" value="Mar: 5PM">
                            <label class="form-check-label" for="ccna4Mar">
                            Mar: 5PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="ccna4" id="ccna4Mie" value="Mie: 7PM">
                            <label class="form-check-label" for="ccna4Mie">
                            Mie: 7PM
                            </label>
                        </div>   
                 
                    </div>
                </div>
            </div>


            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    CCNA 5
                  </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div class="accordion-body" id="materia5radio">

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="ccna5" id="ccna5Lun" value="Lun: 4PM" checked>
                            <label class="form-check-label" for="ccna5Lun">
                            Lun: 4PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="ccna5" id="ccna5Mar" value="Mar: 6PM" >
                            <label class="form-check-label" for="ccna5Mar">
                            Mar: 6PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="ccna5" id="ccna5Mie" value="Mie: 8PM">
                            <label class="form-check-label" for="ccna5Mie">
                            Mie: 8PM
                            </label>
                        </div> 
                 
                    </div>
                </div>
            </div>

            <button type="button" class="btn btn-dark materiasBtn">Siguiente</button>

        </div>
         <!-- materias fin -->     
</div>
        `;

        $("#secondary-container").html(htmlHorarioRedes);
    }

    function GenerateHTMLHorarioMultimedia() {

        const htmlHorarioMultimedia = `
        <div>

        <!-- materia inicio -->
        
        <ul class="nav">
        <li class="nav-item">
          <a class="nav-link navDP" aria-current="page" href="#">Datos Personales ►</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Seleccion Horario ►</a>
        </li>
        </ul>

        <div class="card-header headerstyle text-primary materiasHeader"><h3>Seleccion Materias ~ ${valueCarrera} </h3></div>
        
        <div class="accordion" id="accordionExample">

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Multimedia 1
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body" id="materia1radio">

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="multimedia1" id="multimedia1Lun" value="Lun: 12PM" checked>
                            <label class="form-check-label" for="multimedia1Lun">
                            Lun: 12PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="multimedia1" id="multimedia1Mar" value="Mar: 2PM">
                            <label class="form-check-label" for="multimedia1Mar">
                            Mar: 2PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="multimedia1" id="multimedia1Mie" value="Mie: 3PM">
                            <label class="form-check-label" for="multimedia1Mie">
                            Mie: 3PM
                            </label>
                        </div>   

                    </div>                            
                </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Multimedia 2
                </button>
              </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body" id="materia2radio">

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="multimedia2" id="multimedia2Lun" value="Lun: 1PM" checked>
                            <label class="form-check-label" for="multimedia2Lun">
                            Lun: 1PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="multimedia2" id="multimedia2Mar" value="Mar: 3PM">
                            <label class="form-check-label" for="multimedia2Mar">
                            Mar: 3PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="multimedia2" id="multimedia2Mie" value="Mie: 5PM">
                            <label class="form-check-label" for="multimedia2Mie">
                            Mie: 5PM
                            </label>
                        </div>                       
                    

                    </div>    
                </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Multimedia 3
                </button>
              </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body" id="materia3radio">

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="multimedia3" id="multimedia3Lun" value="Lun: 2PM" checked>
                            <label class="form-check-label" for="multimedia3Lun">
                            Lun: 2PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="multimedia3" id="multimedia3Mar" value="Mar: 4PM">
                            <label class="form-check-label" for="multimedia3Mar">
                            Mar: 4PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="multimedia3" id="multimedia3Mie" value="Mie: 6PM">
                            <label class="form-check-label" for="multimedia3Mie">
                            Mie: 6PM
                            </label>
                        </div>   
                
                    </div>
                </div>
            </div>


            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Multimedia 4
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body" id="materia4radio">

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="multimedia4" id="multimedia4Lun" value="Lun: 3PM" checked>
                            <label class="form-check-label" for="multimedia4Lun">
                            Lun: 3PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="multimedia4" id="multimedia4Mar" value="Mar: 5PM">
                            <label class="form-check-label" for="multimedia4Mar">
                            Mar: 5PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="multimedia4" id="multimedia4Mie" value="Mie: 7PM">
                            <label class="form-check-label" for="multimedia4Mie">
                            Mie: 7PM
                            </label>
                        </div>   
                 
                    </div>
                </div>
            </div>


            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Multimedia 5
                  </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div class="accordion-body" id="materia5radio">

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="multimedia5" id="multimedia5Lun" value="Lun: 4PM" checked>
                            <label class="form-check-label" for="multimedia5Lun">
                            Lun: 4PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="multimedia5" id="multimedia5Mar" value="Mar: 6PM" >
                            <label class="form-check-label" for="multimedia5Mar">
                            Mar: 6PM
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="multimedia5" id="multimedia5Mie" value="Mie: 8PM">
                            <label class="form-check-label" for="multimedia5Mie">
                            Mie: 8PM
                            </label>
                        </div> 
                 
                    </div>
                </div>
            </div>

            <button type="button" class="btn btn-dark materiasBtn">Siguiente</button>

        </div>
         <!-- materias fin -->     
</div>
        `;

        $("#secondary-container").html(htmlHorarioMultimedia);
    }

    function ConfirmacionHorario() {

        const confirmacionHorario = `
                      
        <div>
            <ul class="nav">
            <li class="nav-item">
            <a class="nav-link navDP" aria-current="page" href="#">Datos Personales ►</a>
            </li>
            <li class="nav-item">
            <a class="nav-link navSH" href="#">Seleccion Horario ►</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Confirmacion</a>
            </li>
            </ul>
            <div class="card-header headerstyle text-primary materiasHeader"><h3> Confirme su horario </h3></div>
                
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Nombre: ${valueNombre} </li>
                <li class="list-group-item">Provincia: ${valueProvincia} </li>
                <li class="list-group-item">Ciudad: ${valueCiudad} </li>
                <li class="list-group-item">Sector: ${valueSector} </li>
                <li class="list-group-item">Calle: ${valueCalle} </li>
                <li class="list-group-item">Materia: ${valueCarrera} </li>  
            </ul>           
            
            <table class="table mt-2">
        <thead class="table-dark">
            <tr>
                <th scope="col">Asignatura</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">Dia / Hora</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">${materia1}</th>
                <td></td>
                <td></td>
                <td></td>
                <td>${radio1}</td>
                <td></td>
            </tr>
            <tr>
                <th scope="row">${materia2}</th>
                <td></td>
                <td></td>
                <td></td>
                <td>${radio2}</td>
                <td></td>
            </tr>
            <tr>
                <th scope="row">${materia3}</th>
                <td></td>
                <td></td>
                <td></td>
                <td>${radio3}</td>
                <td></td>
            </tr>
            <tr>
                <th scope="row">${materia4}</th>
                <td></td>
                <td></td>
                <td></td>
                <td>${radio4}</td>
                <td></td>
            </tr>
            <tr>
                <th scope="row">${materia5}</th>
                <td></td>
                <td></td>
                <td></td>
                <td>${radio5}</td>
                <td></td>
            </tr>
        </tbody>
    </table>

    <button type="button" class="btn btn-dark finalizarConfBTN">Finalizar</button>
            
        </div>
    </div>
        
        `;

        $("#secondary-container").html(confirmacionHorario);
    }

    function Creating() {
        valueNombre = $("#nombre").val();
        valueProvincia = $("#provincia").val();
        valueCiudad = $("#ciudad").val();
        valueSector = $("#sector").val();
        valueCalle = $("#calle").val();
        valueCarrera = $("#carrerasdd").val();

        if (Validating()) {
            validarCarreras();
        } else {
            alert("Debe completar todos los campos");
        }
    }

    function Validating() {

        let isValid = true;

        if (valueNombre == "" || valueNombre == null || valueNombre == undefined) {
            isValid = false;
            $("#nombre").addClass("input-error");
        } else {
            $("#nombre").removeClass("input-error");
        }


        if (valueProvincia == "" || valueProvincia == null || valueProvincia == undefined) {
            isValid = false;
            $("#provincia").addClass("input-error");
        } else {
            $("#provincia").removeClass("input-error");
        }


        if (valueCiudad == "" || valueCiudad == null || valueCiudad == undefined) {
            isValid = false;
            $("#ciudad").addClass("input-error");
        } else {
            $("#ciudad").removeClass("input-error");
        }


        if (valueSector == "" || valueSector == null || valueSector == undefined) {
            isValid = false;
            $("#sector").addClass("input-error");
        } else {
            $("#sector").removeClass("input-error");
        }


        if (valueCalle == "" || valueCalle == null || valueCalle == undefined) {
            isValid = false;
            $("#calle").addClass("input-error");
        } else {
            $("#calle").removeClass("input-error");
        }


        if (valueCarrera == "" || valueCarrera == null || valueCarrera == undefined) {
            isValid = false;
            $("#carrerasdd").addClass("input-error");
        } else {
            $("#carrerasdd").removeClass("input-error");
        }

        return isValid;
    }

    function Clear() {
        $("#nombre").val("").removeClass("input-error").focus();
        $("#provincia").val("").removeClass("input-error");
        $("#ciudad").val("").removeClass("input-error");
        $("#sector").val("").removeClass("input-error");
        $("#calle").val("").removeClass("input-error");
        $("#carrerasdd").val("").removeClass("input-error");
    }

    function validarCarreras() {

        carrera = $("#carrerasdd").val();

        if (carrera == "Software") {

            materia1 = "Programacion 1";
            materia2 = "Programacion 2";
            materia3 = "Programacion 3";
            materia4 = "Programacion 4";
            materia5 = "Programacion 5";

            GenerateHTMLHorarioProg();

        } else if (carrera == "Redes") {

            materia1 = "CCNA 1";
            materia2 = "CCNA 2";
            materia3 = "CCNA 3";
            materia4 = "CCNA 4";
            materia5 = "CCNA 5";

            GenerateHTMLHorarioRedes();

        } else {

            materia1 = "Multimedia 1";
            materia2 = "Multimedia 2";
            materia3 = "Multimedia 3";
            materia4 = "Multimedia 4";
            materia5 = "Multimedia 5";

            GenerateHTMLHorarioMultimedia();
        }
    }

    function HtmlDatos() {

        const htmldatos = `

        <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link disabled mt-3" aria-current="page" href="#">Datos Personales</a>
                </li>        
              </ul>

        <div class="card border-primary mb-3 card-div" id="datospersonales-container">

        <div class="card-header headerstyle text-primary card-header"><h3>Datos Personales</h3></div>
        <div class="card-body text-primary"></div>

        <div class="mb-3">
            <input type="text" class="form-control mymarginleft estilo1" id="nombre" placeholder="Nombre">
        </div>
         
        <div class="mb-3">
            <input type="text" class="form-control mymarginleft estilo1" id="provincia" placeholder="Provincia">
        </div>

        <div class="mb-3">
            <input type="text" class="form-control mymarginleft estilo1" id="ciudad" placeholder="Ciudad">
        </div>

        <div class="mb-3">
            <input type="text" class="form-control mymarginleft estilo1" id="sector" placeholder="Sector">
        </div>

        <div class="mb-3">
            <input type="text" class="form-control mymarginleft estilo1" id="calle" placeholder="Calle">
        </div>

        <div class=" estilo3">
            <label for="carreras" class="form-label labelmargin carrera-style">Carrera: </label>
            <select class="form-select btn btn-light" style="max-width:20rem;" id="carrerasdd">
                <option value="">----------</option>
                <option value="Software">Software</option>
                <option value="Redes">Redes</option>
                <option value="Multimedia">Multimedia</option>                
            </select>
        </div>

        <div class="d-grid gap-2">
            <button type="button" class="btn btn-primary btn-estilo1" id="btnregistrar">Registrar</button>
            <button type="button" class="btn btn-danger btn-estilo2" id="btnlimpiar">Limpiar</button>
        </div>       
             
            
    </div> 
        
        `;

        $("#secondary-container").html(htmldatos);

        $("#nombre").val(valueNombre);
        $("#provincia").val(valueProvincia);
        $("#ciudad").val(valueCiudad);
        $("#sector").val(valueSector);
        $("#calle").val(valueCalle);
        $("#carrerasdd").val(valueCarrera);

    }

    function navHorario() {

        if (valueCarrera == "Software") {

            GenerateHTMLHorarioProg();
            $("#materia1radio").val(radio1);
            $("#materia2radio").val(radio2);
            $("#materia3radio").val(radio3);
            $("#materia4radio").val(radio4);
            $("#materia5radio").val(radio5);

        } else if (valueCarrera == "Redes"){

            GenerateHTMLHorarioRedes();
            $("#materia1radio").val(radio1);
            $("#materia2radio").val(radio2);
            $("#materia3radio").val(radio3);
            $("#materia4radio").val(radio4);
            $("#materia5radio").val(radio5);

        } else (valueCarrera == "Multimedia")
        {
            

                GenerateHTMLHorarioMultimedia();
                $("#materia1radio").val(radio1);
                $("#materia2radio").val(radio2);
                $("#materia3radio").val(radio3);
                $("#materia4radio").val(radio4);
                $("#materia5radio").val(radio5);
        }

    } 


});



