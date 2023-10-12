$(document).ready( function () {
   
    // html elements save in variables 
    let namefield ='<label for="name" class="form-label">Name :</label> <input type="text" class="form-control mb-2" placeholder="Name" id="name"><div class="forvalidation" id="forname"></div>'
    let idfield ='<label for="inputid" class="form-label">Id :</label> <input type="text" class="form-control mb-2" placeholder="Id" id="inputid"><div class="forvalidation" id="forid"></div>'
    let classfield ='<label for="class" class="form-label">Class :</label> <input type="text" class="form-control mb-2" placeholder="Class" id="class"><div class="forvalidation" id="forclass"></div>'
    let valuefield ='<label for="value" class="form-label">Value :</label> <input type="text" class="form-control mb-2" placeholder="Value" id="value"><div class="forvalidation" id="forvalue"></div>'
    let placeholderfield ='<label for="placeholder" class="form-label">placeholder :</label> <input type="text" class="form-control mb-2" placeholder="placeholder" id="placeholder"><div class="forvalidation" id="forplaceholder"></div>'
    let requirdfield ='<h6>Requird: </h6> <input class="form-check-input input-radio" type="radio" name="requird" id="requirdtrue" value="true"> <label class="form-check-label" for="requirdtrue">true</label> <input class="form-check-input" type="radio" name="requird" id="requirdfalse" value="false"> <label class="form-check-label" for="requirdfalse">False</label><div class="forvalidation" id="forRequird"></div><br>'
    let readonlyfield ='<h6>Readonly: </h6> <input class="form-check-input input-radio" type="radio" name="readonly" id="readonlytrue" value="true"> <label class="form-check-label" for="readonlytrue">true</label> <input class="form-check-input" type="radio" name="readonly" id="readonlyfalse" value="false"> <label class="form-check-label" for="readonlyfalse">False</label><div class="forvalidation" id="forreadonly"></div><br>'
    let savebtn ='<button type="button" class="btn btn-success mt-3 me-3" id="save">Save</button>'
    let cancelbtn ='<button type="button" class="btn btn-danger mt-3 " id="cancel">cancel</button>'
    
    // for hide form output
    $('.showformfields').hide()

    // empty form field
    function emptyform() {
        $("#formfields").empty()
    }

    // next btn click event 
    $("#next").click(function(){
        emptyform()
        let selected_form = $("#selectform").find(":selected").val();

        // append input field
        if(selected_form == "textbox"){
            $("#formfields").append('<label for="textbox" class="form-label">Type :</label> <input type="text" class="form-control mb-2" value="text" id="textbox" readonly>')
            $("#formfields").append(namefield, idfield, classfield, valuefield, placeholderfield, requirdfield, readonlyfield, savebtn, cancelbtn)
        }
        if(selected_form == "textarea"){
            $("#formfields").append('<label for="textarea" class="form-label">Type :</label> <input type="text" class="form-control mb-2" value="textarea" id="textarea" readonly>')
            $("#formfields").append(namefield, idfield, classfield, placeholderfield, valuefield, requirdfield, readonlyfield, savebtn, cancelbtn)
        }
        if(selected_form == "email"){
            $("#formfields").append('<label for="email" class="form-label">Type :</label> <input type="text" class="form-control mb-2" value="email" id="email" readonly>')
            $("#formfields").append(namefield, idfield, classfield, placeholderfield, valuefield, requirdfield, readonlyfield, savebtn, cancelbtn)
        }
        if(selected_form == "password"){
            $("#formfields").append('<label for="pass" class="form-label">Type :</label> <input type="text" class="form-control mb-2" value="password" id="pass" readonly>')
            $("#formfields").append(namefield, idfield, classfield, placeholderfield, valuefield, requirdfield, readonlyfield, savebtn, cancelbtn)
        }
        if(selected_form == "number"){
            $("#formfields").append('<label for="number" class="form-label">Type :</label> <input type="text" class="form-control mb-2" value="number" id="number" readonly>')
            $("#formfields").append(namefield, idfield, classfield, placeholderfield, requirdfield, readonlyfield, savebtn, cancelbtn)
        }
        if(selected_form == "radio"){ 
            $("#formfields").append('<label for="radio" class="form-label">Type :</label> <input type="text" class="form-control mb-2" value="radio" id="radio" readonly>')
            $("#formfields").append(namefield, idfield, classfield, valuefield, savebtn, cancelbtn)
        }
        if(selected_form == "checkbox"){
            $("#formfields").append('<label for="checkbox" class="form-label">Type :</label> <input type="text" class="form-control mb-2" value="checkbox" id="checkbox" readonly>')
            $("#formfields").append(namefield, idfield, classfield, valuefield, savebtn, cancelbtn)
        }
        if(selected_form == "select"){
            $("#formfields").append('<label for="select" class="form-label">Type :</label> <input type="text" class="form-control mb-2" value="select" id="select" readonly>')
            $("#formfields").append(namefield, idfield, classfield, savebtn, cancelbtn )
            $("#formfields").append('<button type="button" class="btn btn-success mt-3 ms-3" id="option">option</button><br>')
        }
        if(selected_form == "button"){
            $("#formfields").append('<label for="button" class="form-label">Type :</label> <input type="text" class="form-control mb-2" value="button" id="button" readonly>')
            $("#formfields").append(namefield, idfield, classfield, savebtn, cancelbtn )
        }
    });

    // option btn click event
    let optionindex = 0;
    $("#formfields").on('click','#option',function(){ 
        optionindex++
        // append options in select 
        $('#formfields').append('<div class="select-option" id="option-form' + optionindex + '"></div>')
        $("#option-form" + optionindex).append('<h6>option' + optionindex + ':</h6> <label for="optionname' + optionindex + '" class="form-label">name :</label> <input type="text" class="form-control mb-2" placeholder="option name" id="optionname' + optionindex + '">')
        $("#option-form" + optionindex).append('<label for="optionvalue' + optionindex + '" class="form-label">Value :</label> <input type="text" class="form-control mb-2" placeholder="option value" id="optionvalue' + optionindex + '">')
    });
    
    // cancel btn click event
    $("#formfields").on('click','#cancel',function(){
        $("#formfields").empty()
    });

    //for check validation 
    function checkValidation() {
        let namevalue = $("#name").val();
        let idvalue = $("#inputid").val();
        let classvalue = $("#class").val();
        let valuefieldvalue = $("#value").val();
        let placeholdervalue = $("#placeholder").val();
        if (namevalue == ""){
            $("#forname").html("enter name");
        } 
        else {
            $("#forname").html("");
        }
         if(idvalue == ""){
            $("#forid").html("enter name");
        } 
        else {
            $("#forid").html("");
        }
         if(classvalue == ""){
            $("#forclass").html("enter name");
        } 
        else {
            $("#forclass").html("");
        } 
         if(valuefieldvalue == ""){
            $("#forvalue").html("enter name");
        } 
        else {
            $("#forvalue").html("");
        } 
         if(placeholdervalue == ""){
            $("#forplaceholder").html("enter name");
        } 
        else {
            $("#forplaceholder").html("");
        } 
        if ($("input[name=requird]:checked").length <= 0) {      
            $("input[name=requird]").css("outline", "1px solid red");
            $("#forRequird").html("Please select a field");
        }
        else {        
            $("input[name=requird]").css("outline", "none");
            $("#forRequird").html("");
        }
        if ($("input[name=readonly]:checked").length <= 0) {      
            $("input[name=readonly]").css("outline", "1px solid red");
            $("#forreadonly").html("Please select a field");
        }
        else {        
            $("input[name=readonly]").css("outline", "none");
            $("#forreadonly").html("");
        } 
    }

    // save click event
    let array = [];
    $("#formfields").on('click','#save',function(){
        $("#format").empty()
        let type = $(".form-control").val();
        let namevalue = $("#name").val();
        let idvalue = $("#inputid").val();
        let classvalue = $("#class").val();
        let valuefieldvalue = $("#value").val();
        let placeholdervalue = $("#placeholder").val();
        let requirdvalue = $('input[name="requird"]:checked').val();
        let Readonlyvalue = $('input[name="readonly"]:checked').val();
        let selected_form = $("#selectform").find(":selected").val();
        let max = $(".select-option").length
        let obj = {};
        let opt = [];
        
        checkValidation()
        if (namevalue !== "" && idvalue !== "" && classvalue !== "" && valuefieldvalue !== "" && placeholdervalue !== "" && requirdvalue !== undefined && Readonlyvalue !== undefined){
                
                // value push in object
                obj.type = type
                obj.name = namevalue;
                obj.id = idvalue;
                obj.class = classvalue;
                obj.value = valuefieldvalue;
                obj.placeholder = placeholdervalue;
                obj.requird = requirdvalue;
                obj.Readonly = Readonlyvalue;

                // object push in array
                array.push(obj)
                
                // array convert into jasonformate and appned 
                let jsonformat = JSON.stringify(array, null, 1);
                $("#format").append(jsonformat)

                // change value of required and readonly values 
                if (requirdvalue == "true"){
                    requirdvalue = "requird"
                } else if (requirdvalue == "false"){
                    requirdvalue = ""
                }
                if (Readonlyvalue == "true"){
                    Readonlyvalue = "readonly"
                } else if (Readonlyvalue == "false"){
                    Readonlyvalue = ""
                }

                // append created formfields
                if(selected_form == "textbox"){
                    $("#showformfields").append('<label for="'+idvalue+'" class="form-label">'+namevalue+' : </label> <input type="' +type+'" class=" '+classvalue+ ' mb-2" name="'+namevalue+'" placeholder="'+placeholdervalue+'" value="'+valuefieldvalue+'" id="'+idvalue+'" '+requirdvalue+' '+Readonlyvalue+'><br>')
                }
                if(selected_form == "textarea"){
                    $("#showformfields").append('<label for="'+idvalue+'" class="form-label">'+namevalue+' : </label> <textarea type="'+type+'" class=" '+classvalue+ ' mb-2" name="'+namevalue+'" placeholder="'+placeholdervalue+'" value="'+valuefieldvalue+'" id="'+idvalue+'" rows="2" cols="50" '+requirdvalue+' '+Readonlyvalue+'></textarea><br>')
                }
                if(selected_form == "email"){
                    $("#showformfields").append('<label for="'+idvalue+'" class="form-label">'+namevalue+' : </label> <input type="' +type+'" class=" '+classvalue+ ' mb-2" name="'+namevalue+'" value="'+valuefieldvalue+'" placeholder="'+placeholdervalue+'" id="'+idvalue+'" '+requirdvalue+' '+Readonlyvalue+'><br>' )
                }
                if(selected_form == "password"){
                    $("#showformfields").append('<label for="'+idvalue+'" class="form-label">'+namevalue+' : n</label> <input type="' +type+'" class=" '+classvalue+ ' mb-2" name="'+namevalue+'" value="'+valuefieldvalue+'" placeholder="'+placeholdervalue+'" id="'+idvalue+'" '+requirdvalue+' '+Readonlyvalue+'><br>')
                }
                if(selected_form == "number"){
                    $("#showformfields").append('<label for="'+idvalue+'" class="form-label">'+namevalue+' : </label> <input type="' +type+'" class=" '+classvalue+ ' mb-2" name="'+namevalue+'" placeholder="'+placeholdervalue+'" id="'+idvalue+'" '+requirdvalue+' '+Readonlyvalue+'><br>')
                }
            emptyform()
        } 

        if (namevalue !== "" && idvalue !== "" && classvalue !== "" && valuefieldvalue !== ""){
            if (selected_form == "radio" || selected_form == "checkbox" || selected_form == "select" || selected_form == "button"){
                // value push in object
            obj.type = type
            obj.name = namevalue;
            obj.id = idvalue;
            obj.class = classvalue;
            obj.value = valuefieldvalue;
            obj.placeholder = placeholdervalue;
            obj.requird = requirdvalue;
            obj.Readonly = Readonlyvalue;
            
            // option value print in json format
            if (selected_form == "select"){
                for (let i = 1; i<=max;i++){
                    let optdata = {};
                    let name = $("#optionname" + i).val();
                    let value = $("#optionvalue"+ i).val();
                    optdata.name = name
                    optdata.value = value
                    opt.push(optdata)
                }
                obj.option = opt;
            }
            
            // object push in array
            array.push(obj)
            
            // array convert into jasonformate and appned 
            let jsonformat = JSON.stringify(array, null, 1);
            $("#format").append(jsonformat)
        
            // append created formfields            
            if(selected_form == "radio"){  
                $("#showformfields").append('<label for="'+idvalue+'" class="form-check-label">'+idvalue+' : </label> <input type="' +type+'" class=" '+classvalue+ ' form-check-input mb-2" name="'+namevalue+'" value="'+valuefieldvalue+'" id="'+idvalue+'" ><br>')
            }
            if(selected_form == "checkbox"){
                $("#showformfields").append('<label for="'+idvalue+'" class="form-check-label">'+idvalue+' : </label> <input type="' +type+'" class=" '+classvalue+ ' form-check-input mb-2" name="'+namevalue+'" value="'+valuefieldvalue+'" id="'+idvalue+'" ><br>')
            }
            try {
                if(selected_form == "select"){
                    $("#showformfields").append('<select class="form-select '+classvalue+'" name="'+namevalue+'" id="'+idvalue+'" '+requirdvalue+'> </select><br>')
                    for (let i = 0; i< max;i++){
                        let m = i+1
                        $("#" + idvalue).append('<option value="'+$("#optionvalue"+ m).val()+'" >'+$("#optionname" + m).val()+'</option>');
                    }
                }
            }
            catch {
             emptyform()
            }
            if(selected_form == "button"){
                 $("#showformfields").append('<button type="' +type+'" class=" '+classvalue+' btn btn-warning" id="'+idvalue+'">'+namevalue+'</button><br>')
            }
            
            emptyform()

            }    
            
        }  

        optionindex = 0
    });

    // showform btn click event 
    $("#showform").click(function(){
        $('#showformfields').toggle();
        $('#format').toggle();
   }); 
});

