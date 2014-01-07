document.addEventListener("DOMContentLoaded", function (e) {
	var cont = document.getElementById('nextButton');
	cont.addEventListener('touchend', function(e){
		e.preventDefault();
		var select = document.getElementById("spel");
		var name = select.options[select.selectedIndex].text;
		window.location = "coachboard.html#" + name; 
	});
});

function loadStates(){
	console.log('Populating list.....');

	var coachBoards = eval(RaakStorage.getItem('savedCoachboards'));
	var select = document.getElementById("spel");
	for (var i = coachBoards.length - 1; i >= 0; i--) {
		select.options[select.options.length] = new Option(coachBoards[i].name, i);
	};	
}

