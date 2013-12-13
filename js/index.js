function showAbout(){
	navigator.notification.alert(
                                 'Deze applicatie is ontwikkeld door dhr. M. Stevens, dhr. R. Stevens & dhr. T. Lagerburg in opdracht van RAAK, als invulling van de webtechstage van de opleiding ICT.',  // message
                                 alertDismissed,         // callback
                                 'Over de applicatie',            // title
                                 'Oké, ik snap het!'                  // buttonName
                                 );
    
    //alert("Deze applicatie is ontwikkeld door dhr. M. Stevens, dhr. R. Stevens & dhr. T. Lagerburg in opdracht van RAAK, als invulling van de webtechstage van de opleiding ICT.")
}

function alertDismissed(){};

