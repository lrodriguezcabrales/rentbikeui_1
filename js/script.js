server = 'http://localhost:8080/';

function login() {
	
	debugger
	var email = document.getElementById('email').value;
	
	var password = document.getElementById('password').value;
	
	var parameters = {
        type: 'POST',          
        url : server+'rentbike/web/app_dev.php/login',
        contentType: 'application/json',
        dataType: "json",           
        success: function(response){    
        	
			debugger	
        },
        error: function (e) {
			console.log(e)
			alert('Ha ocurrido un error'); 
        }
    };

	$.ajax(parameters); 
}