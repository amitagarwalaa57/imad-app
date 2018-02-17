console.log('Loaded!');
//change the text of main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'New value';

//Move the image
var img = document.getElementById('madi');
img.onclick = function(){
  madi.style.marginLeft='100 px';  
};