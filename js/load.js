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
            name: "bank",
            url: './res/_algemeen/bank.png'
        },
        {
            name: "coach",
            url: './res/_algemeen/coach.png'
        },
        {
            name: "dubbelgroenkruisbal",
            url: './res/_algemeen/dubbelgroenkruisbal.png'
        },
        {
            name: "gelerand",
            url: './res/_algemeen/gelerand.png'
        },
        {
            name: "grijzerand",
            url: './res/_algemeen/grijzerand.png'
        },
        {
            name: "groenkruisbal",
            url: './res/_algemeen/groenkruisbal.png'
        },
        {
            name: "jongen",
            url: './res/_algemeen/jongen.png'
        },
        {
            name: "lopendcoach",
            url: './res/_algemeen/lopendcoach.png'
        },
        {
            name: "lopendjongen",
            url: './res/_algemeen/lopendjongen.png'
        },
        {
            name: "meisje",
            url: './res/_algemeen/meisje.png'
        },
        {
            name: "trippelgroenkruisbal",
            url: './res/_algemeen/trippelgroenkruisbal.png'
        },
        {
            name: "witterand",
            url: './res/_algemeen/witterand.png'
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