document.addEventListener("DOMContentLoaded", main);

function main()
{
	var cont = document.getElementById('nextButton');
	cont.addEventListener('touchend', function(e){
		var selected = document.getElementById('spel').options[document.getElementById('spel').selectedIndex].value;
		var playfield;		
		if(selected == "softbal" || selected == "voetbal")
		{			
			playfield = new PlayField(selected,"green");			
		}else{
			playfield = new PlayField(selected,"blue");			
		}	
		RaakStorage.storeItem("veld", JSON.stringify(playfield));			
	});
}