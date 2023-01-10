function login(){

      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
   
        $.ajax({
                type:   "POST",
                url:    "https://www.smartr.app/login.php",
                headers: {
                    "Access-Control-Allow-Origin":"*" ,
                    // Access-Control-Allow-Origin
                    //"Access-Control-Allow-Headers" : "Content-Type"

                },
                data:   {
                  
                },
                dataType: 'JSON',
                success: (response) =>{
                	if(response[0].email == email && response[0].password == password)
	                	{
	                		
	                		window.location.href = ('first.html');
	                	}
                  
                },
                error: function () {
                    console.log ("ERROR:");
                }
            });
   

}