document.addEventListener("DOMContentLoaded", function (e) {
	var xhReq = new XMLHttpRequest();
	 xhReq.open("GET", "http://raak.ggwp.eu/config.php", false);
	 xhReq.send(null);
	 var serverResponse = eval('(' + xhReq.responseText + ')');
	 for (var i = serverResponse.length - 1; i >= 0; i--) {
	 	console.log(serverResponse[i]);
	 };
	 	//console.log(JSON.parse(serverResponse));
});