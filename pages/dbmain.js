 
var register = document.getElementById('submit');
    register.onclick = function () {
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  alert('User created successfully');
                  register.value = 'Registered!';
              } else {
                  alert('Could not register the user');
                  register.value = 'Register';
              }
          }
        };
        
        // Make the request
        var username = document.getElementById('username').value;
		var password = document.getElementById('password').value;
		var passwordconf = document.getElementById('passwordconf').value;
		var name = document.getElementById('name').value;
		var dob = document.getElementById('dob').value;
		var email = document.getElementById('email').value;
		var phn = document.getElementById('phn').value;
		
		if(password != passwordconf)
			{
				alert("The entered passwords are mismatching");
			}
		else {        
        console.log(username);
        console.log(password);
			console.log(dob);
        request.open('POST', '/create-user',true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({"username": username, "password": password, "name":name, "dob":dob, "email":email, phn:phn}));   
        register.value = 'Registering...';
	}
    
    };

