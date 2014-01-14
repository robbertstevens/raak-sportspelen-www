var selectedElement = null,
	stage,
	recording = false,
	recMovement = [],
	startPositions = [];
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
		    fill: "white",
		    name: "background"
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
		var sele = null; //
		for (var j = startPositions.length - 1; j >= 0; j--) {
			if(startPositions[j].id == selectedElement._id)
			{
				sele = startPositions[j];
			}
		};

		var i = startPositions.indexOf(sele);		
		if(i != -1){
			startPositions.splice(i, 1);// delete entry in start positions
		}

		for(var k = recMovement.length - 1; k >= 0; k--) {// delete entries in recorded movement
		    if(recMovement[k].id === selectedElement._id) {
		       recMovement.splice(k, 1);
		    }
		}
		
		selectedElement.remove();
		this.classList.add("hide");
		stage.draw();
	}, false);

	document.getElementById('recordButton').addEventListener("touchend", function(e) {
		e.preventDefault();
		recording = !recording;
		this.classList.toggle("recBlink");
		if (recording) {
			for (var i = layer.children.length - 1; i >= 0; i--) {
				if(layer.children[i].className == "Image"){
					startPositions.push({
						id: layer.children[i]._id,
						x: layer.children[i].getX(),
						y: layer.children[i].getY(),
						rot: layer.children[i].getRotationDeg()
					});
				}
			};	
			console.log(startPositions);	
		}
	}, false);
	document.getElementById('playButton').addEventListener("touchend", function(e) {
		e.preventDefault();
		recording = false;
		document.getElementById('recordButton').classList.remove("recBlink");
		this.classList.toggle("playBlink");
		for (var b = layer.children.length - 1; b >= 0; b--) {
			for (var c = startPositions.length - 1; c >= 0; c--) {
				if(startPositions[c].id == layer.children[b]._id)
				{
					layer.children[b].setPosition(startPositions[c].x, startPositions[c].y);
					//layer.children[b].setRotationDeg(0);		
					layer.children[b].setRotationDeg(startPositions[c].rot);					
				}
			};
		};
		stage.draw();
		var i = 0;
		
		var move = setInterval(function() {
					if(i < recMovement.length)
					{
						var node = null;
						for (var a = layer.children.length - 1; a >= 0; a--) {
							if(layer.children[a]._id == recMovement[i].id)
							{
								node = layer.children[a];
							}					
						};
						node.setPosition(recMovement[i].x, recMovement[i].y);
						node.setRotationDeg(0);		
						node.setRotationDeg(recMovement[i].rot);				
						stage.draw();					
						i++;
						console.log(a);
					}else{
						clearInterval(move);
						document.getElementById('playButton').classList.toggle("playBlink");
					}
		},10);	
		
	}, false);
    
	document.getElementById('resetButton').addEventListener("touchend", function(e) {
		e.preventDefault();
		resetPositions(layer);
	}, false);

	document.getElementById('backButton').addEventListener("touchend", function(e) {
		e.preventDefault();
		if(location.hash === "")
		{
			window.location = "spelselecteren.html"; 
		}else
		{
			window.location = "spelladen.html"; 
		}
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
	document.getElementById('saveButton').addEventListener("touchend", function(e) {
		e.preventDefault();
		var objects = {}, 
			saveToStorage = (localStorage.savedCoachboards != null ) 
							? JSON.parse(eval(localStorage.savedCoachboards)) 
							: new Array(),
			otntbs = layer.children; //Objects That Need To Be Saved  
			name = (location.hash === "") ? prompt("Voer naam van dit coachboard in") : location.hash.replace("#", "");

		objects.name = name;
		objects.elements = [];
		location.hash = name;
		console.log(location.hash)
		for (var i = otntbs.length - 1; i >= 0; i--) {
			var attrs = {};
			if(otntbs[i].className == "Image") {
				attrs.width = otntbs[i].getWidth();
				attrs.height = otntbs[i].getHeight();
				attrs.x = otntbs[i].getX();
				attrs.y = otntbs[i].getY();
				attrs.rotationDeg = otntbs[i].getRotationDeg();
				attrs.offsetX = otntbs[i].getOffsetX();
				attrs.offsetY = otntbs[i].getOffsetY();
				attrs.src = otntbs[i].attrs.image.src;
				attrs.name = "Image";
				attrs.id = otntbs[i]._id;

			} else if( otntbs[i].className == "Line") {
				attrs.points = otntbs[i].getPoints();
				attrs.name = "Line"
			} else {
				attrs.x = otntbs[i].getX();
				attrs.y = otntbs[i].getY();
				attrs.width = otntbs[i].getWidth();
				attrs.height = otntbs[i].getHeight();
				attrs.name = "Rectangle";
			}
			if(otntbs[i].getName() != "background"){
				objects.elements.push(attrs);
			}
		};
		objects.movements = recMovement;
		objects.startPositions = startPositions;
		if ( saveToStorage.length < 1) {
			saveToStorage.push(objects);
		}

		for (var i = saveToStorage.length - 1; i >= 0; i--) {
			if ( saveToStorage[i].name == name ) {
				saveToStorage[i] = objects;
				console.log("hij bestaat");
			} else {
				saveToStorage.push(objects);
				console.log("hij bestaat niet")
				break;
			}
		};
		console.log(saveToStorage);
		//saveToStorage.push(objects);
		//console.log(savedCb)

		RaakStorage.storeItem("savedCoachboards", JSON.stringify(saveToStorage));
		//console.log(JSON.parse(JSON.stringify(objects)));
		/*
			img attrs: width, height, x, y, src, scale, offset
			line attrs: points, 
			rect attrs: widht, height, x, y, 

		*/
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
	var h = 0, placement = 0;
	
	for (var p = 0; p < materials.length; p = p+1)
	{
		imgObj[p] = new Image();
		imgObj[p].onload = function() {
		var offset = [imgObj[h].width / 2, imgObj[h].height / 2];
		
		var thingy = new Kinetic.Image({
				x: 10 + (offset[0] /3),
				y: placement + (offset[1] / 3),
				image: imgObj[h],
				draggable: true,
				scale: (materials[h].hasOwnProperty("scale")) ? materials[h].scale : 1,
				offset: [imgObj[h].width / 2, imgObj[h].height / 2]
				//fill: "red"
			});
			thingy.on("touchstart", function(e) {
				var clone = this.clone(this.getAttrs());
				inventory.add(clone);

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

			});		
		
			inventory.add(thingy);
			stage.draw();
				
				placement += imgObj[h].height / 2;
					
			h++;

		}
		imgObj[p].src = materials[p].url;		
		
	}
	//this.application.destroy.method(nuke);
}
	if(location.hash !== "")
	{		
		parseSavedBoards(window.location.href.split("#")[1], inventory, stage, layer);
		resetPositions(layer);
	}

	
});

function resetPositions(layer){
	recording = false;
		for (var b = layer.children.length - 1; b >= 0; b--) {
			for (var c = startPositions.length - 1; c >= 0; c--) {
				if(startPositions[c].id == layer.children[b]._id)
				{
					layer.children[b].setPosition(startPositions[c].x, startPositions[c].y);
					layer.children[b].setRotationDeg(startPositions[c].rot)	
					console.log(startPositions[c])				
				}
			};
		};
		stage.draw();
}

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
		console.log(this);
		selectedElement = this;
		deSelect(this.parent);
	});
	s.on("touchend", function(e) {
		this.enableStroke();
		this.setStroke("red");
		stage.draw();
	});
	s.on("dragmove", function(e){
		if(recording){
			recMovement.push({
				id: this._id,
				x: this.getX(),
				y: this.getY(),
				rot: this.getRotationDeg()
			});
			console.log(recMovement);			
		}
	});
	return s;
}