function parseSavedBoards(id, inventory, stage, layer)
{
	var coachBoards = eval(RaakStorage.getItem('savedCoachboards'));	
	var loadBoard = null;
	for (var i = coachBoards.length - 1; i >= 0; i--) {
		if(coachBoards[i].name === id)
		{
			loadBoard = coachBoards[i].elements;				
		}
	};
	if(loadBoard != null)
	{			
		for (var i = loadBoard.length - 1; i >= 0; i--) {
			switch(loadBoard[i].name)
			{
				case 'Image':
					createImage(loadBoard[i], inventory, stage, layer);
					break;
				case 'Line':
					createLine(loadBoard[i], layer, stage);
					break;
				case 'Rectangle':
					createRectangle(loadBoard[i], layer, stage);
					break;		   				
			}						
		};			
		stage.draw();				
	}else{
		console.log('error');
	}
}
function createRectangle(loadBoard, layer, stage){
	rect = new Kinetic.Rect({
		x: loadBoard.x,
		y: loadBoard.y,
		width: loadBoard.width,
		height: loadBoard.height,        
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
	stage.draw();	
}

function createLine(loadBoard, layer, stage){	
	drawingObject = new Kinetic.Line({
         points: loadBoard.points, //start point and end point are the same
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
	stage.draw();
}	

function createImage(loadBoard, inventory, stage, layer){	
	var imgObj = new Image();
	var s = new Kinetic.Image({
		x: loadBoard.x,
		y: loadBoard.y,
		image: imgObj,
		draggable: true,
		scale: 0.3,
		offset: [loadBoard.width / 2, loadBoard.height / 2]	
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
	imgObj.src = loadBoard.src;
	layer.add(s);
}