var selectedElement = null,
	stage;
document.addEventListener("DOMContentLoaded", function (e) {
	//KineticJS Draw Line
	stage = new Kinetic.Stage({
	        container: 'playfield',
	        width: window.innerWidth,
	        height: window.innerHeight -45
    	});
	var selectedTool = null,
		group =null,
		shapeToDraw = "",
		dragging = false, drawingObject, moving = false,
		materials = RaakStorage.getItem("field").materials,
		pointerPos,
		background = new Kinetic.Rect({
		    x: 0,
		    y: 0,
		    width: stage.getWidth(),
		    height: stage.getHeight(),
		    fill: "white"
		}),
		inventory = new Kinetic.Layer({
			x: window.innerWidth - 300,
			y: 0,
			width: 300,
			height: window.innerHeight,
			// other properties... 
		}),
		inventoryTween = new Kinetic.Tween({
			node: inventory,
			duration: 1,
			x: window.innerWidth-50,
			y: 0,
			easing: Kinetic.Easings["EaseInOut"]
		}),
		inventoryBg = new Kinetic.Rect({
			x: 0,
			y: 0,
			width: inventory.getWidth(),
			height: inventory.getHeight(),
			fill: 'grey',
			stroke: 'black',
			strokeWidth: 1 
		}),
		layer = new Kinetic.Layer({
			width: window.innerWidth-50
		});
	
	background.on("touchstart", function(e) {
		dragging = false;
		deSelect(layer);
	});
	
	inventory.on("dbltap", function(e) {
		if ( inventoryTween.tween.getPosition() == 0) {
			inventoryTween.tween.play();
		} else {
			inventoryTween.reverse();
		}
	});
	
	layer.add(background);
	inventory.add(inventoryBg);
	stage.add(layer);

	drawInventory();

    inventory.draw();
	stage.add(inventory); 
	console.log(layer);

	document.getElementById('fixedLineButton').addEventListener("touchend", function(e) {
		selectedTool = "line";
		stage.draw();
		console.log(selectedTool);
	}, false);
	document.getElementById('freeLineButton').addEventListener("touchend", function(e) {
		selectedTool = "freeDraw";
		stage.draw();
		console.log(selectedTool);
	}, false);
	document.getElementById('rectangleButton').addEventListener("touchend", function(e) {
		selectedTool = "rectangle";
		stage.draw();
		console.log(selectedTool);
	}, false);                     
    document.getElementById('noToolButton').addEventListener("touchend", function(e) {
        selectedTool = null;
        stage.draw();
        console.log(selectedTool);
    }, false);
	document.getElementById('removeElementButton').addEventListener("touchend", function(e) {
		selectedElement.remove();
		this.classList.add("hide");
		stage.draw();
	}, false);
                          
	document.getElementById('clearButton').addEventListener("touchend", function(e) {
		layer.removeChildren();
		inventory.removeChildren();
		layer.add(background);
		inventory.add(inventoryBg);
		layer.draw();
		inventory.draw();
		drawInventory();
	}, false);

	stage.on("touchstart", function(e) {
		pointerPos = stage.getPointerPosition();

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

	function rectangleStart() {
		if(!dragging){
			if (moving) {
			    moving = false;
			    layer.drawScene();
			} else {   	
				deSelect(layer);
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

		    		deSelect(layer);
		    		//this.setStroke('red');
				    if(this.getDraggable()){
				        this.setStroke('red');  
				    }
				    document.getElementById("removeElementButton").classList.remove("hide");
				    selectedElement = this;
				    stage.draw();
				});  
		    	rect.on('touchend', function(event) {	    		
		    		dragging = false;
		    	});  	
		    	rect.on("dbltap", function(event) {
		    		this.setDraggable(!this.getDraggable());
		    		this.setStroke('black');
		    		this.moveToBottom();
		    		this.moveUp();
		    		stage.draw();

		    	});
		    	
		    	layer.add(rect);
		    	moving = true; 
			}
		}
	}

function rectangleMove() {
	if (!moving) return;
	rect.setWidth(stage.pointerPos.x - rect.attrs.x);
	rect.setHeight(stage.pointerPos.y - rect.attrs.y);	    
	layer.drawScene();
}

function rectangleEnd() {
	moving = false;
	layer.draw();
	layer.off('touchstart touchmove touchend');
}

function lineStart() {
	if ( moving ) {
        moving = false;
        layer.drawScene();
    } else {
        var mousePos = stage.pointerPos;
        
        drawingObject = new Kinetic.Line({
            points: [mousePos.x, mousePos.y,mousePos.x, mousePos.y], //start point and end point are the same
            stroke: '#000',
            strokeWidth: 4,
            name: 'line',
            draggable: true
        });
        drawingObject.on("touchstart", function(evt) {
        	
        	deSelect(layer);
        	
			this.setStroke('red');  
			
			document.getElementById("removeElementButton").classList.remove("hide");
			selectedElement = this;
			stage.draw();
        })
        drawingObject.on("mouseover", function (evt) {
            document.body.style.cursor = 'pointer';
        });
        drawingObject.on("mouseout", function (evt) {
            document.body.style.cursor = 'default';
        });

        layer.add(drawingObject);
        moving = true;
    }
}

function freeLineMove() {
	if (moving) {
        var mousePos = stage.pointerPos;
        var x = mousePos.x;//- group.getX();
        var y = mousePos.y;// - group.getY();

        drawingObject.attrs.points.push({x: x, y: y})
        
        moving = true;
        layer.drawScene();
    }
}

function fixedLineMove() {
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

function lineEnd() {
	moving = false;
	drawingObject = null;
	layer.draw();
	layer.off('touchstart touchmove touchend');
}
function drawInventory() {
	var imgObj = new Array();
	var h = 0, placement = 10;
	for (var p = 0; p < materials.length; p = p+1)
	{
		imgObj[p] = new Image();
		imgObj[p].onload = function() {
		var offset = [imgObj[h].width / 2, imgObj[h].height / 2];
		placement += imgObj[h].height /3;
		var thingy = new Kinetic.Image({
				x: 10 + (offset[0] /3),
				y: placement,
				image: imgObj[h],
				draggable: true,
				scale: 0.3,
				offset: [imgObj[h].width / 2, imgObj[h].height / 2]
				//fill: "red"
			});
			thingy.on("touchstart", function(e) {
				var clone = this.clone(this.getAttrs());
				//deSelect(layer);
				//this.setPosition(stage.getPointerPosition().x+(this.getImage().width/2), stage.getPointerPosition().y+(this.getImage().height/2));
				inventory.add(clone);
				//stage.draw();

			});
			thingy.on("touchend", function(e) {
				var xiets = stage.getPointerPosition().x - this.getAbsolutePosition().x; //Berekent de plek waar je op de afbeelding hebt geklikt
				var yiets = stage.getPointerPosition().y - this.getAbsolutePosition().y; //Berekent de plek waar je op de afbeelding hebt geklikt
				layer.add(createShape(this.getImage(), { 
					x: stage.getPointerPosition().x - xiets, 
					y: stage.getPointerPosition().y - yiets
				}));
							
				this.remove();
				stage.draw();
			});
			thingy.on("dragstart", function(e){
				selectedTool = null;
				dragging = true;
/*
				this.off("touchstart");
				this.on("touchstart", function(e){
					//selectedElement = this;
					deSelect(layer);
					//for (var i = layer.children.length - 1; i >= 0; i--) {
			   		//	layer.children[i].disableStroke();
					//};
					this.enableStroke();
					this.setStroke('red');
				});
*/
			});		
			thingy.on("dragend", function(e){
				//console.log('x: ' + this.attrs.x + ' y: ' + this.attrs.y);
				/*dragging = false;
				if(this.attrs.x > 0)
				{
					this.destroy();
					stage.draw();
				}*/
			});
				
			inventory.add(thingy);
			stage.draw();
			h++;

		}
		imgObj[p].src = materials[p].url;
	}
	//this.application.destroy.method(nuke);
}

});

function updateTextInput(val) {
    if(selectedElement !=null)
    {      	
    	console.log(val);
    	selectedElement.setRotationDeg(0);
    	selectedElement.rotateDeg(val);
    	stage.draw();
    }
}

function deSelect(layer) {
	for (var i = layer.children.length - 1; i >= 0; i--) {			    	
		if(layer.children[i].className == "Image") {
			layer.children[i].disableStroke();			
		} else{
			layer.children[i].setStroke('black');
		}			    	
	};
	stage.draw();
}
function createShape(img, pos) {
	var s = new Kinetic.Image({
		x: pos.x,
		y: pos.y,
		image: img,
		scale:0.3,
		draggable: true,
		offset: [img.width / 2, img.height / 2]
	});
	s.on("touchstart", function(e) {
		selectedElement = this;
		deSelect(this.parent);
	});
	s.on("touchend", function(e) {
		this.enableStroke();
		this.setStroke("red");
		stage.draw();
	})
	return s;
}