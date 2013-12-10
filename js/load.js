document.addEventListener("DOMContentLoaded", function (e) {
	addGames();
	loadGames();
	
	var cont = document.getElementById('nextButton');
	cont.addEventListener('touchend', function(e){
		var selected = document.getElementById('spel').options[document.getElementById('spel').selectedIndex].value;		
		var coachboard = RaakStorage.getItem("coachboard");
		RaakStorage.storeItem("field",  coachboard[selected]);		
		
	});
});

function loadGames(){
	var coachboard = RaakStorage.getItem("coachboard");
	
	var select = document.getElementById("spel");
	for(index in coachboard) {
    	 select.options[select.options.length] = new Option(coachboard[index].game, index);
	}
}

function addGames(){
	spelen = [];
	spelen.push({
		game: "Softbal",
        color: "#00ff00",
        materials: [{
            name: "doel",
            url: './res/_algemeen/bank.png'
        },
        {
            name: "bal",
            url: './res/_algemeen/coach.png'
        }]
	});
	spelen.push({
		game: "Voetbal",
        color: "#00ff00",
        materials: [{
            name: "doel",
            url: "url/to/img"
        },
        {
            name: "bal",
            url: "url/to/img"
        }]
	});
	spelen.push({
		game: "Handbal",
        color: "#0000ff",
        materials: [{
            name: "doel",
            url: "url/to/img"
        },
        {
            name: "bal",
            url: "url/to/img"
        }]
	});
	spelen.push({
		game: "Volleybal",
        color: "#0000ff",
        materials: [{
            name: "doel",
            url: "url/to/img"
        },
        {
            name: "bal",
            url: "url/to/img"
        }]
	});
	spelen.push({
		game: "Badminton",
        color: "#0000ff",
        materials: [{
            name: "doel",
            url: "url/to/img"
        },
        {
            name: "bal",
            url: "url/to/img"
        }]
	});
	spelen.push({
		game: "Handbal",
        color: "#0000ff",
        materials: [{
            name: "doel",
            url: "url/to/img"
        },
        {
            name: "bal",
            url: "url/to/img"
        }]
	});
	spelen.push({
		game: "Korfbal",
        color: "#0000ff",
        materials: [{
            name: "doel",
            url: "url/to/img"
        },
        {
            name: "bal",
            url: "url/to/img"
        }]
	});
	spelen.push({
		game: "Basketbal",
        color: "#0000ff",
        materials: [{
            name: "doel",
            url: "url/to/img"
        },
        {
            name: "bal",
            url: "url/to/img"
        }]
	});
	RaakStorage.storeItem("coachboard",spelen);
}