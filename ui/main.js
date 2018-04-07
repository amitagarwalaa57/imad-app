//submit username/password to login
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //make a request to the server and send the names
    //create a request object
    
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take action
            
            if(request.status === 200){
                //capture a list of names and render it as list
    
              console.log('user logged in');
              alert('logged in successfully!!');
                }
                else if(request.status === 403){
                    alert('username/password incorrect!!');
                }
                else if(request.status === 500){
                    alert('something went wrong');
                }
        //Not done yet
    }
    };
    
    //Make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://amitagarwalaa57.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
    
        
    
    
};
