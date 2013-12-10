document.addEventListener("DOMContentLoaded", function (e) {
	spelen = [];
	spelen.push({
		game: "Softbal",
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

	var blaat = RaakStorage.getItem("coachboard");
	
	var select = document.getElementById("spel");
	for(index in blaat) {
    	 select.options[select.options.length] = new Option(blaat[index].game, index);
	}
});