document.addEventListener("DOMContentLoaded", function (e) {
	//KineticJS Draw Line

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

	function drawLine() {
	    var group, line, moving = false;

	    layer.on("mousedown", function (e) {
	        if (moving) {
	            moving = false;
	            layer.drawScene();
	        } else {
	            var mousePos = stage.pointerPos;

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
	            line = new Kinetic.Line({
	                points: [0, 0, 0, 0], //start point and end point are the same
	                stroke: '#000',
	                strokeWidth: 2,
	                name: 'line'
	            });

	            line.on("mouseover", function (evt) {
	                document.body.style.cursor = 'pointer';
	            });
	            line.on("mouseout", function (evt) {
	                document.body.style.cursor = 'default';
	            });

	            group.add(line);
	            layer.add(group);
	            moving = true;
	        }
	    });

	    layer.on("mousemove", function (e) {
	        if (moving) {
	            var mousePos = stage.pointerPos;
	            var x = mousePos.x - group.getX();
	            var y = mousePos.y - group.getY();

	            //line.attrs.points.push({x: x, y: y});
	            line.attrs.points[1] = { x: x, y: y});
	            moving = true;
	            layer.drawScene();
	        }
	    });

	    layer.on("mouseup", function (e) {
	        moving = false;
	        layer.draw();
	        layer.off('mousedown mousemove mouseup');
	    });

	}

	document.getElementById('fixedLineButton').onclick = function () {
	    drawLine();
	};
});


