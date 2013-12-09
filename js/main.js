
document.addEventListener("DOMContentLoaded", function (e) {
	//KineticJS Draw Line
	var selectedTool = null,
		group =null,
		shapeToDraw = "",
		dragging = false, drawingObject;
	var moving = false;
var stage = new Kinetic.Stage({
        container: 'playfield',
        width: window.innerWidth,
        height: window.innerHeight
    });
console.log(stage);
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
	document.getElementById('fixedLineButton').addEventListener("touchend", function(e) {
		selectedTool = "line";switchTool();
	}, false);
	document.getElementById('freeLineButton').addEventListener("touchend", function(e) {
		selectedTool = "freeDraw";switchTool();
	}, false);
	document.getElementById('rectangleButton').addEventListener("touchend", function(e) {
		selectedTool = "rectangle";		switchTool();
		
	}, false);
	function switchTool() {
		switch(selectedTool) {
			case "line": 
				stage.on("touchstart", lineStart());
				stage.on("touchmove", fixedLineMove());
				stage.on("touchend", lineEnd());
			break;
			case "freeDraw": 
				stage.on("touchstart", lineStart());
				stage.on("touchmove", freeLineMove());
				stage.on("touchend", lineEnd());
				break;
			case "rectangle": 
				stage.on("touchstart", rectangleStart());
				stage.on("touchmove", rectangleMove());
				stage.on("touchend", rectangleEnd());
			break;		
		}
	}
	function rectangleStart(){
	if(!dragging){
		if (moving) {
		    moving = false;
		    layer.drawScene();
		} else {   	

	    	rect = new Kinetic.Rect({
		        x: stage.pointerPos.x,
		        y: stage.pointerPos.y,
		        width: 11,
		        height: 1,        
		        stroke: 'black',
		        strokeWidth: 3,
		        draggable: true	        
	    	});
	    	rect.on('touchstart', function(event) {	    		
	    		dragging = true;
	    	});  
	    	rect.on('touchend', function(event) {	    		
	    		dragging = false;
	    	});  	
	    	layer.add(rect);
	    	moving = true; 
		}
	}
}

function rectangleMove(){
	if (!moving) return;
	rect.setWidth(stage.pointerPos.x - rect.attrs.x);
	rect.setHeight(stage.pointerPos.y - rect.attrs.y);	    
	layer.drawScene();
}

function rectangleEnd(){
	moving = false;
	layer.draw();
	layer.off('touchstart touchmove touchend');
}

function lineStart(){
	if ( moving ) {
        moving = false;
        layer.drawScene();
    } else {
        var mousePos = stage.pointerPos;
        //console.log(mousePos);
        group = new Kinetic.Group({
            x: mousePos.x,
            y: mousePos.y,
            draggable: true
        });
                            console.log(group);
        group.on("dragstart", function (evt) {
            this.moveToTop();
            document.body.style.cursor = 'move';
        });
        group.on("dragend", function (evt) {
            document.body.style.cursor = 'default';
        });
        drawingObject = new Kinetic.Line({
            points: [0, 0, 0, 0], //start point and end point are the same
            stroke: '#000',
            strokeWidth: 2,
            name: 'line'
        });
        drawingObject.on("mouseover", function (evt) {
            document.body.style.cursor = 'pointer';
        });
        drawingObject.on("mouseout", function (evt) {
            document.body.style.cursor = 'default';
        });

        group.add(drawingObject);
        layer.add(group);
        moving = true;
    }
}

function freeLineMove(){
	if (moving) {
        var mousePos = stage.pointerPos;
        var x = mousePos.x - group.getX();
        var y = mousePos.y - group.getY();

        drawingObject.attrs.points.push({x: x, y: y})
        
        moving = true;
        layer.drawScene();
    }
}

function fixedLineMove(){
	if (moving) {
        var mousePos = stage.pointerPos;
        var x = mousePos.x - group.getX();
        var y = mousePos.y - group.getY();
        
        drawingObject.attrs.points[1].x = x;
        drawingObject.attrs.points[1].y = y;
        
        moving = true;
        layer.drawScene();
    }
}

function lineEnd(){
	moving = false;
	drawingObject = null;
	layer.draw();
	layer.off('touchstart touchmove touchend');
}
});


