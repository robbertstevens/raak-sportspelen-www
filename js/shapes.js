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
        group = new Kinetic.Group({
            x: mousePos.x,
            y: mousePos.y,
            draggable: true
        });
                            //console.log(group);
        group.on("dragstart", function (evt) {
            this.moveToTop();
            document.body.style.cursor = 'move';
        });
        group.on("dragend", function (evt) {
            document.body.style.cursor = 'default';
        });
        dr = new Kinetic.Line({
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
        
        line.attrs.points[1].x = x;
        line.attrs.points[1].y = y;
        
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