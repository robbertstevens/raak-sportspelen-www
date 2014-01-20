// Authors : Robbert Stevens S1050385, Michael Stevens S1049275, Tim Lagerburg S1045334 ISM5WTb

//functie om een native prompt scherm te weergeven.
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