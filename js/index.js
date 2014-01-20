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

//functie om een native prompt scherm te weergeven.
function showHelp(){
	navigator.notification.alert(
                                 'Een vierkant kan vastgezet en ontgrendeld worden door er op te dubbel tappen. de materialenlijst kan verborgen en teruggehaald worden door er op te dubbel tappen. Een item kan verwijdert worden door deze te selecteren en vervolgens op de kruis knop te drukken.',  // message
                                 alertDismissed,         // callback
                                 'Help tips en tricks',            // title
                                 'Oké, ik snap het!'                  // buttonName
                                 );
    
    //alert("Deze applicatie is ontwikkeld door dhr. M. Stevens, dhr. R. Stevens & dhr. T. Lagerburg in opdracht van RAAK, als invulling van de webtechstage van de opleiding ICT.")
}

function alertDismissed(){};