server = 'http://localhost:8080/';


function login(event) {
	
	

	var email = document.getElementById('email').value;
	
	var password = document.getElementById('password').value;
	
	var data = {
		"email": email,
		"password": password
	};

	data = JSON.stringify(data);
	//data.push('email', email);

	debugger

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

function openModal(argument) {
    $('#myModal').modal('show');

    
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
        },
        error: function (e) {
            console.log(e)
            alert('Ha ocurrido un error'); 
        }
    };

    $.ajax(parameters); 

}