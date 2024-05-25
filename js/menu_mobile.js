let botaoMenu = document.getElementById('menu'),
	 menuMobile    = document.getElementById('menu__mobile')

botaoMenu.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	menuMobile.classList.toggle('is-open');
});

/* Onload demo - dirty timeout */
let clickEvent = new Event('click');

window.addEventListener('load', function(e) {
	slowmo.dispatchEvent(clickEvent);
	botaoMenu.dispatchEvent(clickEvent);
	
	setTimeout(function(){
		botaoMenu.dispatchEvent(clickEvent);
	}, 5500);
});