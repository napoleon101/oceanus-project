var settings = document.getElementById('menu-toggle');
var close = document.getElementById('menu-toggle');
var tooglebox = document.getElementById('nav');

settings.onclick = function(){
    tooglebox.style.display = "flex";
    alert(tooglebox.className);
}    
close.onclick = function(){
    tooglebox.style.display = "none";
    alert(tooglebox.className);
}







// function menuToggle(){
// 	if (document.getElementById('nav').style.display == 'none') {
// 		document.getElementById('nav').style.display = 'flex';
// 	else{
// 		document.getElementById('nav').style.display = 'none'
// 	}
// 	}
// };

// var button = document.getElementById('menu-toggle');
// button.onclick = menuToggle()
