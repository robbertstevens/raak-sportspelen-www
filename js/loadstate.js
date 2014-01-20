// Authors : Robbert Stevens S1050385, Michael Stevens S1049275, Tim Lagerburg S1045334 ISM5WTb

//onload van pagina wordt de event listener op de nextbutton toegevoegd om de url voor de volgende pagina juist te maken zodat het juiste coachboard wordt ingeladen.
document.addEventListener("DOMContentLoaded", function (e) {
	var cont = document.getElementById('nextButton');
	cont.addEventListener('touchend', function(e){
		e.preventDefault();
		var select = document.getElementById("spel");
		var name = select.options[select.selectedIndex].text;
		window.location = "coachboard.html#" + name; 
	});
});

//functie om de dropdown list te populaten.
function loadStates(){
	console.log('Populating list.....');

	var coachBoards = eval(RaakStorage.getItem('savedCoachboards'));
	var select = document.getElementById("spel");
	for (var i = coachBoards.length - 1; i >= 0; i--) {
		select.options[select.options.length] = new Option(coachBoards[i].name, i);
	};	
}

