//count code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    //create a request object
    
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            //Take action
            
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //Not done yet
    };
    //Make the request
    
    request.open('GET', 'http://amitagarwalaa57.imad.hasura-app.io/counter' ,true);
    request.send(null);
};

