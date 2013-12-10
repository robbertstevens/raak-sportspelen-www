document.addEventListener("DOMContentLoaded", function (e) {
	//KineticJS Draw Line
	var selectedTool = null,
		group =null,
		shapeToDraw = "",
		dragging = false, drawingObject, moving = false,
		materials = RaakStorage.getItem("field").materials,
		stage = new Kinetic.Stage({
        container: 'playfield',
        width: window.innerWidth,
        height: window.innerHeight
    });
	console.log(materials);
	var background = new Kinetic.Rect({
	    x: 0,
	    y: 0,
	    width: stage.getWidth(),
	    height: stage.getHeight(),
	    fill: "white"
	});
	
	var inventory = new Kinetic.Layer({
		x: window.innerWidth - 380,
		y: 0,
		width: 480,
		height: window.innerHeight,
		// other properties... 
	})
	var inventoryBg = new Kinetic.Rect({
		x: 0,
		y: 0,
		width: inventory.getWidth(),
		height: inventory.getHeight(),
		fill: 'grey',
		stroke: 'black',
		strokeWidth: 1,
		// other properties... 
	})
	var layer = new Kinetic.Layer();
	
	layer.add(background);
	inventory.add(inventoryBg);
	stage.add(layer);


	var imgObj = new Array();
	var h = 0;
	for (var p = 0; p < materials.length; p = p+1)
	{
		imgObj[p] = new Image();
		imgObj[p].onload = function() {
			console.log(h);

			var thingy = new Kinetic.Image({
				x:10,
				y:10,
				image: imgObj[h],
				draggable: true
			})
			inventory.add(thingy);
			inventory.draw();
			h++;

		}
		imgObj[p].src = materials[p].url;
	}
		
		//this.application.destroy.method(nuke);
    inventory.draw();
	stage.add(inventory); 
	console.log(inventory);

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
	    		this.setDraggable(!this.getDraggable());
	    		this.moveToBottom();
	    		this.moveUp();
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
        /*group = new Kinetic.Group({
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
        });*/
        drawingObject = new Kinetic.Line({
            points: [mousePos.x, mousePos.y,mousePos.x, mousePos.y], //start point and end point are the same
            stroke: '#000',
            strokeWidth: 2,
            name: 'line',
            draggable: true
        });
        drawingObject.on("mouseover", function (evt) {
            document.body.style.cursor = 'pointer';
        });
        drawingObject.on("mouseout", function (evt) {
            document.body.style.cursor = 'default';
        });

       // group.add(drawingObject);
        layer.add(drawingObject);
        moving = true;
    }
}

function freeLineMove(){
	if (moving) {
        var mousePos = stage.pointerPos;
        var x = mousePos.x;//- group.getX();
        var y = mousePos.y;// - group.getY();

        drawingObject.attrs.points.push({x: x, y: y})
        
        moving = true;
        layer.drawScene();
    }
}

function fixedLineMove(){
	if (moving) {
        var mousePos = stage.pointerPos;
        var x = mousePos.x;// - group.getX();
        var y = mousePos.y;// - group.getY();
        
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