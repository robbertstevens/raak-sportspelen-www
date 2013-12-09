/*
{
    "game": "voetbal",
    "color": "#00ff00",
    "materials": [
        {
            "name": "doel",
            "url": "url/to/img"
        },
        {
            "name": "bal",
            "url": "url/to/img"
        }
    ]
}
*/


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
var background = new Kinetic.Rect({
	    x: 0,
	    y: 0,
	    width: stage.getWidth(),
	    height: stage.getHeight(),
	    fill: "fff"
	});

	var layer = new Kinetic.Layer();
	stage.setfi
	layer.add(background);
	stage.add(layer);
	layer.drawScene();
	document.getElementById('fixedLineButton').addEventListener("touchend", function(e) {
		selectedTool = "line";
		console.log(selectedTool);
	}, false);
	document.getElementById('freeLineButton').addEventListener("touchend", function(e) {
		selectedTool = "freeDraw";
		console.log(selectedTool);
	}, false);
	document.getElementById('rectangleButton').addEventListener("touchend", function(e) {
		selectedTool = "rectangle";
		console.log(selectedTool);
	}, false);

	stage.on("touchstart", function(e) {
		switch(selectedTool) {
			case "line": lineStart(); break;
			case "freeDraw": lineStart(); break;
			case "rectangle": rectangleStart(); break;
		}
		//console.log(e);
	});
	stage.on("touchmove", function(e) {
		switch(selectedTool) {
			case "line": fixedLineMove(); break;
			case "freeDraw": freeLineMove(); break;
			case "rectangle": rectangleMove(); break;
		}
		//console.log(e);
	});
	stage.on("touchend", function(e) {
		switch(selectedTool) {
			case "line": lineEnd(); break;
			case "freeDraw": lineEnd(); break;
			case "rectangle": rectangleEnd(); break;
		}
		//console.log(e);
	});

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
	    	rect.on("dbltap", function(event) {
	    		rect.setDraggable(!rect.getDraggable());
	    		rect.moveToBottom();
	    		rect.moveUp();
	    		//console.log(rect.getDraggable())
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


