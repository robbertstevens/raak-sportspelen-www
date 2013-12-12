function showAbout(){
	navigator.notification.alert(
                                 'You are the winner!',  // message
                                 alertDismissed,         // callback
                                 'Game Over',            // title
                                 'Done'                  // buttonName
                                 );
    
    //alert("Deze applicatie is ontwikkeld door dhr. M. Stevens, dhr. R. Stevens & dhr. T. Lagerburg in opdracht van RAAK, als invulling van de webtechstage van de opleiding ICT.")
}

function alertDismissed(){};