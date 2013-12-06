document.addEventListener("DOMContentLoaded", function (e) {
	//KineticJS Draw Line
	var selectedTool = null,
		group =null,
		moving = false;
		shapeToDraw = "line";
	var stage = new Kinetic.Stage({
	    container: 'playfield',
	    width: window.innerWidth,
	    height: window.innerHeight
	});

	var background = new Kinetic.Rect({
	    x: 0,
	    y: 0,
	    width: stage.getWidth(),
	    height: stage.getHeight(),
	    fill: "fff"
	});

	var layer = new Kinetic.Layer();

	layer.add(background);
	stage.add(layer);
	layer.drawScene();
	switch(shapeToDraw) {
		case "line": 
			stage.on("touchstart", LineStart());
			stage.on("touchmove", LineMove());
			stage.on("touchend", LineEnd());
			break;
		case "freeDraw": 
			stage.on("touchstart", LineStart());
			stage.on("touchmove", LineMove());
			stage.on("touchend", LineEnd());
			break;
		case "rectangle": 
			stage.on("touchstart", LineStart());
			stage.on("touchmove", LineMove());
			stage.on("touchend", LineEnd());
			break;
	}
	document.getElementById('fixedLineButton').addEventListener("click", function(e) {
		selectedTool = "line";
	}, false);



