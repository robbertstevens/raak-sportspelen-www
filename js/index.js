document.addEventListener("DOMContentLoaded", function(){
	var buttons = document.getElementsByTagName('a');
    for (var i = buttons.length - 1; i >= 0; i--) {    	
    	buttons[i].addEventListener("touchstart",function(e){
		    //e.preventDefault();
		    this.classList.add('tapped');		    
    	}, false);
	    	buttons[i].addEventListener("touchend", function(e){
	    	//e.preventDefault();	    	
	    	this.classList.remove('tapped');	    	
    	}, false); 
    }
});