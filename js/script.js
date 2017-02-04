server = 'http://localhost:8080/';

positionNext = 0;
validation = false;

function login(event) {

	var email = document.getElementById('email').value;
	
	var password = document.getElementById('password').value;
	
	var data = {
		"email": email,
		"password": password
	};

	data = JSON.stringify(data);

	var parameters = {
        type: 'POST',          
        url : server+'rentbike/web/app_dev.php/login',
        contentType: 'application/json',
        dataType: "json",
        data: data,  
        success: function(response){    
        	if(response.status != 200){
        		alert(response.msj);
        	}else{

        		$('#form-login').hide();

        		var divUsers = $('<div class= "users">Usuarios</div>');

        		var divBikes = $('<div class= "bikes">Bicicletas</div>');

        		var divRents = $('<div class= "rents">Rentas</div>');

        		$('.login').append(divUsers);

        		$('.login').append(divBikes);

        		$('.login').append(divRents);
        		//var table = $('<table></table>');

                window.location = server+'/rentbikeui/panel.html';

        	}

        },
        error: function (e) {
        	debugger
			console.log(e)
			alert('Ha ocurrido un error'); 
        }
    };

	$.ajax(parameters); 
}

function listUsers() {
    
    //var btnNew = $('<button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">Nuevo</button>');
    
    // var btnNew = $('<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Nuevo</button>')

    // btnNew.click(function (argument) {
    //     addUser();
    // });

    // $('#content').append(btnNew);

    //var table = $('<table id="table-list-users" class="table table-bordered table-hover"></table>');

    var parameters = {
        type: 'GET',          
        url : server+'rentbike/web/app_dev.php/user/list',
        contentType: 'application/json',
        dataType: "json",
        success: function(response){    
            if(response.data){

                var table = $('#table-list-users');
              
                // var thead = $('<tr></tr>');
                // thead.append('<th>Id</th>');
                // thead.append('<th>Nombre</th>');
                // thead.append('<th>Apellido</th>');
                // thead.append('<th>Email</th>');
                // thead.append('<th>Tipo</th>');
              
                // table.append(thead);

                for (var i = 0; i < response.data.length; i++) {
                    var user = response.data[i];

                    var tr = $('<tr></tr>');

                    tr.append('<td>'+user.id+'</td>');
                    tr.append('<td>'+user.name+'</td>');
                    tr.append('<td>'+user.lastname+'</td>');
                    tr.append('<td>'+user.email+'</td>');
                    tr.append('<td>'+user.type+'</td>');

                    table.append(tr);

                }
            }

        },
        error: function (e) {
            debugger
            console.log(e)
            alert('Ha ocurrido un error'); 
        }
    };

    //$('#content').append(table);

    $.ajax(parameters); 
}


function addUser() {
        
    var email = document.getElementById('email').value;
    
    var password = document.getElementById('password').value;

    var name = document.getElementById('name').value;
    
    var lastname = document.getElementById('lastname').value;

    var type = document.getElementById('type').value;
    

    var data = {
        'email': email,
        'password': password,
        'name': name,
        'lastname': lastname,
        'type': type
    };

    data = JSON.stringify(data);

    var parameters = {
        type: 'POST',          
        url : server+'rentbike/web/app_dev.php/user/save',
        contentType: 'application/json',
        dataType: "json",
        data: data,
        success: function(response){    
            alert(response.msj);
            $('#myModal').modal('hide');
            location.reload();
        },
        error: function (e) {
            console.log(e)
            alert('Ha ocurrido un error'); 
        }
    };

    $.ajax(parameters); 

}

function searchUser() {
    
    var text = document.getElementById('suser').value;
    
    var parameters = {
        type: 'GET',          
        url : server+'rentbike/web/app_dev.php/user/search/'+text,
        contentType: 'application/json',
        dataType: "json",
        success: function(response){    
            var table = $('#table-list-users');

            table.empty();

            if($('#thead').length <= 0 ){
                var thead = $('<tr id="thead"></tr>');
                thead.append('<th>Id</th>');
                thead.append('<th>Nombre</th>');
                thead.append('<th>Apellido</th>');
                thead.append('<th>Email</th>');
                thead.append('<th>Tipo</th>');

                table.append(thead);
            }

            for (var i = 0; i < response.data.length; i++) {
                var user = response.data[i];

                var tr = $('<tr></tr>');

                tr.append('<td>'+user.id+'</td>');
                tr.append('<td>'+user.name+'</td>');
                tr.append('<td>'+user.lastname+'</td>');
                tr.append('<td>'+user.email+'</td>');
                tr.append('<td>'+user.type+'</td>');

                table.append(tr);

                //location.reload();

            }
        },
        error: function (e) {
            console.log(e)
            alert('Ha ocurrido un error'); 
        }
    };

    $.ajax(parameters); 
}

function listBikes() {

    var parameters = {
        type: 'GET',          
        url : server+'rentbike/web/app_dev.php/bike/list',
        contentType: 'application/json',
        dataType: "json",
        success: function(response){    
            if(response.data){

                var table = $('#table-list-bikes');
                              
                for (var i = 0; i < response.data.length; i++) {
                    var bike = response.data[i];

                    var tr = $('<tr></tr>');

                    tr.append('<td>'+bike.id+'</td>');
                    tr.append('<td>'+bike.code+'</td>');
                    tr.append('<td>'+bike.state+'</td>');
                    tr.append('<td>'+bike.description+'</td>');

                    table.append(tr);

                }
            }

        },
        error: function (e) {
            console.log(e)
            alert('Ha ocurrido un error'); 
        }
    };

    //$('#content').append(table);

    $.ajax(parameters); 
}

function clearUser() {
    
    var parameters = {
        type: 'GET',          
        url : server+'rentbike/web/app_dev.php/user/list',
        contentType: 'application/json',
        dataType: "json",
        success: function(response){    
            if(response.data){

                var table = $('#table-list-users');
                
                table.empty();

                if($('#thead').length <= 0 ){
                    var thead = $('<tr id="thead"></tr>');
                    thead.append('<th>Id</th>');
                    thead.append('<th>Nombre</th>');
                    thead.append('<th>Apellido</th>');
                    thead.append('<th>Email</th>');
                    thead.append('<th>Tipo</th>');

                    table.append(thead);
                }

                for (var i = 0; i < response.data.length; i++) {
                    var user = response.data[i];

                    var tr = $('<tr></tr>');

                    tr.append('<td>'+user.id+'</td>');
                    tr.append('<td>'+user.name+'</td>');
                    tr.append('<td>'+user.lastname+'</td>');
                    tr.append('<td>'+user.email+'</td>');
                    tr.append('<td>'+user.type+'</td>');

                    table.append(tr);

                }
            }

        },
        error: function (e) {
            console.log(e)
            alert('Ha ocurrido un error'); 
        }
    };

    //$('#content').append(table);

    $.ajax(parameters);
}

function addBike() {
        
    var code = document.getElementById('code').value;
    
    var state = document.getElementById('state').value;

    var description = document.getElementById('description').value;
  
    var data = {
        'code': code,
        'state': state,
        'description': description
    };

    data = JSON.stringify(data);

    var parameters = {
        type: 'POST',          
        url : server+'rentbike/web/app_dev.php/bike/save',
        contentType: 'application/json',
        dataType: "json",
        data: data,
        success: function(response){    
            alert(response.msj);
            $('#modalBike').modal('hide');
            location.reload();
        },
        error: function (e) {
            console.log(e)
            alert('Ha ocurrido un error'); 
        }
    };

    $.ajax(parameters); 
}

function searchBike() {
    
    var text = document.getElementById('sbike').value;
    
    var parameters = {
        type: 'GET',          
        url : server+'rentbike/web/app_dev.php/bike/search/'+text,
        contentType: 'application/json',
        dataType: "json",
        success: function(response){    
            var table = $('#table-list-bikes');

            table.empty();

            if($('#thead').length <= 0 ){
                var thead = $('<tr id="thead"></tr>');
                thead.append('<th>Id</th>');
                thead.append('<th>Código</th>');
                thead.append('<th>Descripción</th>');
                thead.append('<th>Estado</th>');
              
                table.append(thead);
            }

            for (var i = 0; i < response.data.length; i++) {
                var bike = response.data[i];

                var tr = $('<tr></tr>');

                tr.append('<td>'+bike.id+'</td>');
                tr.append('<td>'+bike.code+'</td>');
                tr.append('<td>'+bike.description+'</td>');
                tr.append('<td>'+bike.state+'</td>');
                table.append(tr);

                //location.reload();

            }
        },
        error: function (e) {
            console.log(e)
            alert('Ha ocurrido un error'); 
        }
    };

    $.ajax(parameters); 
}

function clearBike() {

    var parameters = {
        type: 'GET',          
        url : server+'rentbike/web/app_dev.php/bike/list',
        contentType: 'application/json',
        dataType: "json",
        success: function(response){    
            if(response.data){

                var table = $('#table-list-bikes');

                table.empty();   

                if($('#thead').length <= 0 ){
                    var thead = $('<tr id="thead"></tr>');
                    thead.append('<th>Id</th>');
                    thead.append('<th>Código</th>');
                    thead.append('<th>Descripción</th>');
                    thead.append('<th>Estado</th>');
                  
                    table.append(thead);
                }

                for (var i = 0; i < response.data.length; i++) {
                    var bike = response.data[i];

                    var tr = $('<tr></tr>');

                    tr.append('<td>'+bike.id+'</td>');
                    tr.append('<td>'+bike.code+'</td>');
                    tr.append('<td>'+bike.state+'</td>');
                    tr.append('<td>'+bike.description+'</td>');

                    table.append(tr);

                }
            }

        },
        error: function (e) {
            console.log(e)
            alert('Ha ocurrido un error'); 
        }
    };

    //$('#content').append(table);

    $.ajax(parameters); 
}

function reserve() {
    
    var name = document.getElementById('name').value;
    
    var lastname = document.getElementById('lastname').value;

    var email = document.getElementById('email').value;

    var identification = document.getElementById('dni').value;
    
    var phone = document.getElementById('movil').value;

    var date = document.getElementById('datereserve').value;

    var startTime = document.getElementById('start-time').value;

    var endTime = document.getElementById('end-time').value;


    var data = {
        'name': name,
        'lastname': lastname,
        'email': email,
        'identification': identification,
        'phone': phone,
        'date': date,
        'startTime': startTime,
        'endTime': endTime
    };

    data = JSON.stringify(data);

    var parameters = {
        type: 'POST',          
        url : server+'rentbike/web/app_dev.php/reserve/save',
        contentType: 'application/json',
        dataType: "json",
        data: data,
        success: function(response){    
            alert(response.msj);
            //location.reload();
        },
        error: function (e) {
            console.log(e)
            alert('Ha ocurrido un error'); 
        }
    };

    $.ajax(parameters);
}

function listReserves() {

    var parameters = {
        type: 'GET',          
        url : server+'rentbike/web/app_dev.php/reserve/list',
        contentType: 'application/json',
        dataType: "json",
        success: function(response){    
            if(response.data){

                var table = $('#table-list-reserves');
                              
                for (var i = 0; i < response.data.length; i++) {
                    var reserve = response.data[i];

                    var tr = $('<tr></tr>');

                    tr.append('<td>'+reserve.id+'</td>');
                    tr.append('<td>'+reserve.name+'</td>');
                    tr.append('<td>'+reserve.lastname+'</td>');
                    tr.append('<td>'+reserve.identification+'</td>');
                    tr.append('<td>'+reserve.email+'</td>');
                    tr.append('<td>'+reserve.phone+'</td>');
                    tr.append('<td>'+reserve.date.date+'</td>');
                    tr.append('<td>'+reserve.startTime+'</td>');
                    tr.append('<td>'+reserve.endTime+'</td>');

                    table.append(tr);

                }
            }

        },
        error: function (e) {
            console.log(e)
            alert('Ha ocurrido un error'); 
        }
    };

    //$('#content').append(table);

    $.ajax(parameters); 
}

function searchReserve() {
    
    var text = document.getElementById('sreserve').value;
    
    var parameters = {
        type: 'GET',          
        url : server+'rentbike/web/app_dev.php/reserve/search/'+text,
        contentType: 'application/json',
        dataType: "json",
        success: function(response){ 

            var table = $('#table-list-reserves');

            table.empty();

            if($('#thead').length <= 0 ){
                var thead = $('<tr id="thead"></tr>');
                thead.append('<th>Id</th>');
                thead.append('<th>Nombre</th>');
                thead.append('<th>Apellido</th>');
                thead.append('<th>Identificación</th>');
                thead.append('<th>Email</th>');
                thead.append('<th>Celular</th>');
                thead.append('<th>Fecha</th>');
                thead.append('<th>Hora inicio</th>');
                thead.append('<th>Hora fin</th>');

                table.append(thead);
            }

            var table = $('#table-list-reserves');
                              
                for (var i = 0; i < response.data.length; i++) {
                    var reserve = response.data[i];

                    var tr = $('<tr></tr>');

                    tr.append('<td>'+reserve.id+'</td>');
                    tr.append('<td>'+reserve.name+'</td>');
                    tr.append('<td>'+reserve.lastname+'</td>');
                    tr.append('<td>'+reserve.identification+'</td>');
                    tr.append('<td>'+reserve.email+'</td>');
                    tr.append('<td>'+reserve.phone+'</td>');
                    tr.append('<td>'+reserve.date.date+'</td>');
                    tr.append('<td>'+reserve.startTime+'</td>');
                    tr.append('<td>'+reserve.endTime+'</td>');

                    table.append(tr);

                }
        },
        error: function (e) {
            console.log(e)
            alert('Ha ocurrido un error'); 
        }
    };

    $.ajax(parameters); 
}

function clearReserve() {

    var parameters = {
        type: 'GET',          
        url : server+'rentbike/web/app_dev.php/reserve/list',
        contentType: 'application/json',
        dataType: "json",
        success: function(response){    
            if(response.data){

            var table = $('#table-list-reserves');
                   

            table.empty();

            if($('#thead').length <= 0 ){
                var thead = $('<tr id="thead"></tr>');
                thead.append('<th>Id</th>');
                thead.append('<th>Nombre</th>');
                thead.append('<th>Apellido</th>');
                thead.append('<th>Identificación</th>');
                thead.append('<th>Email</th>');
                thead.append('<th>Celular</th>');
                thead.append('<th>Fecha</th>');
                thead.append('<th>Hora inicio</th>');
                thead.append('<th>Hora fin</th>');

                table.append(thead);
            }

                for (var i = 0; i < response.data.length; i++) {
                    var reserve = response.data[i];

                    var tr = $('<tr></tr>');

                    tr.append('<td>'+reserve.id+'</td>');
                    tr.append('<td>'+reserve.name+'</td>');
                    tr.append('<td>'+reserve.lastname+'</td>');
                    tr.append('<td>'+reserve.identification+'</td>');
                    tr.append('<td>'+reserve.email+'</td>');
                    tr.append('<td>'+reserve.phone+'</td>');
                    tr.append('<td>'+reserve.date.date+'</td>');
                    tr.append('<td>'+reserve.startTime+'</td>');
                    tr.append('<td>'+reserve.endTime+'</td>');

                    table.append(tr);

                }
            }

        },
        error: function (e) {
            console.log(e)
            alert('Ha ocurrido un error'); 
        }
    };

    //$('#content').append(table);

    $.ajax(parameters); 
}
