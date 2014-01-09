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
            name: "honk",
            url: './res/Softbal/honk.png'
        },
        {
            name: "honk_geel",
            url: './res/Softbal/honk_geel.png'
        },
        {
            name: "honk_rood",
            url: './res/Softbal/honk_rood.png'
        },
        {
            name: "honkgroot",
            url: './res/Softbal/honkgroot.png'
        },
        {
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
            name: "groenkruisbal",
            url: './res/_algemeen/groenkruisbal.png'
        },
        {
            name: "jongen",
            url: './res/_algemeen/jongen.png'
        },
        {
            name: "meisje",
            url: './res/_algemeen/meisje.png'
        },
        {
            name: "trippelgroenkruisbal",
            url: './res/_algemeen/trippelgroenkruisbal.png'
        }]
    });
    spelen.push({
        game: "Voetbal",
        color: "#00ff00",
        materials: [{
            name: "bal",
            url: './res/voetbal/bal.png'
        },
        {
            name: "goal_breed",
            url: './res/voetbal/goal_breed.png'
        },
                {
            name: "goal_smal",
            url: './res/voetbal/goal_smal.png'
        },
                {
            name: "pijl",
            url: './res/voetbal/pijl.png'
        },
                {
            name: "waggelpijl",
            url: './res/voetbal/waggelpijl.png'
        },
        {
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
            name: "groenkruisbal",
            url: './res/_algemeen/groenkruisbal.png'
        },
        {
            name: "jongen",
            url: './res/_algemeen/jongen.png'
        },
        {
            name: "meisje",
            url: './res/_algemeen/meisje.png'
        },
        {
            name: "trippelgroenkruisbal",
            url: './res/_algemeen/trippelgroenkruisbal.png'
        }]  
    });
    spelen.push({
        game: "Handbal",
        color: "#0000ff",
        materials: [{
            name: "bal",
            url: './res/Handbal/bal.png'
        },
        {
            name: "bruinemuur",
            url: './res/Handbal/bruinemuur.png'
        },
        {
            name: "goal",
            url: './res/Handbal/goal.png'
        },
        {
            name: "net2.0",
            url: './res/Handbal/net2.0.png'
        },
        {
            name: "pilon_opzijnkop",
            url: './res/Handbal/pilon_opzijnkop.png'
        },
        {
            name: "pilon_rechtop",
            url: './res/Handbal/pilon_rechtop.png'
        },
        {
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
            name: "groenkruisbal",
            url: './res/_algemeen/groenkruisbal.png'
        },
        {
            name: "jongen",
            url: './res/_algemeen/jongen.png'
        },
        {
            name: "meisje",
            url: './res/_algemeen/meisje.png'
        },
        {
            name: "trippelgroenkruisbal",
            url: './res/_algemeen/trippelgroenkruisbal.png'
        }]
    });
    spelen.push({
        game: "Volleybal",
        color: "#0000ff",
        materials: [{
            name: "bal",
            url: './res/Volleybal/bal.png'
        },
        {
            name: "bruinding",
            url: './res/Volleybal/bruinding.png'
        },
        {
            name: "groending",
            url: './res/Volleybal/groending.png'
        },
        {
            name: "korf",
            url: './res/Volleybal/korf.png'
        },
        {
            name: "lichtblauwvlaknet_groot",
            url: './res/Volleybal/lichtblauwvlaknet_groot.png'
        },
        {
            name: "net_groot",
            url: './res/Volleybal/net_groot.png'
        },
        {
            name: "net_klein",
            url: './res/Volleybal/net_klein.png'
        },
        {
            name: "roodmuurtje",
            url: './res/Volleybal/roodmuurtje.png'
        },
        {
            name: "volleybalgooimeneer",
            url: './res/Volleybal/volleybalgooimeneer.png'
        },
        {
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
            name: "groenkruisbal",
            url: './res/_algemeen/groenkruisbal.png'
        },
        {
            name: "jongen",
            url: './res/_algemeen/jongen.png'
        },
        {
            name: "meisje",
            url: './res/_algemeen/meisje.png'
        },
        {
            name: "trippelgroenkruisbal",
            url: './res/_algemeen/trippelgroenkruisbal.png'
        }]
    });
    spelen.push({
        game: "Badminton",
        color: "#0000ff",
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
            name: "groenkruisbal",
            url: './res/_algemeen/groenkruisbal.png'
        },
        {
            name: "jongen",
            url: './res/_algemeen/jongen.png'
        },
        {
            name: "meisje",
            url: './res/_algemeen/meisje.png'
        },
        {
            name: "trippelgroenkruisbal",
            url: './res/_algemeen/trippelgroenkruisbal.png'
        }]
    });
    spelen.push({
        game: "Korfbal",
        color: "#0000ff",
        materials: [{
            name: "bal",
            url: './res/Korfbal/bal.png'
        },
        {
            name: "kast",
            url: './res/Korfbal/kast.png'
        },
        {
            name: "korf",
            url: './res/Korfbal/korf.png'
        },
        {
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
            name: "groenkruisbal",
            url: './res/_algemeen/groenkruisbal.png'
        },
        {
            name: "jongen",
            url: './res/_algemeen/jongen.png'
        },
        {
            name: "meisje",
            url: './res/_algemeen/meisje.png'
        },
        {
            name: "trippelgroenkruisbal",
            url: './res/_algemeen/trippelgroenkruisbal.png'
        }]
    });
    spelen.push({
        game: "Basketbal",
        color: "#0000ff",
        materials: [{
            name: "bal",
            url: './res/Basketbal/bal.png'
        },
        {
            name: "basket",
            url: './res/Basketbal/basket.png'
        },
        {
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
            name: "groenkruisbal",
            url: './res/_algemeen/groenkruisbal.png'
        },
        {
            name: "jongen",
            url: './res/_algemeen/jongen.png'
        },
        {
            name: "meisje",
            url: './res/_algemeen/meisje.png'
        },
        {
            name: "trippelgroenkruisbal",
            url: './res/_algemeen/trippelgroenkruisbal.png'
        }]
    });
    RaakStorage.storeItem("coachboard",spelen);
}