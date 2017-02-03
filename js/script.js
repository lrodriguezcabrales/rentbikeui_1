server = 'http://localhost/';


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