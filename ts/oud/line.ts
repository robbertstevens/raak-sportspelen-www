/// <reference path="references.ts" />
class Line implements IDrawable{
	from: Vector;
	to: Vector;
	context: CanvasRenderingContext2D;

	constructor(from:Vector, to:Vector, context:CanvasRenderingContext2D){
		this.from = from;
		this.to = to;
		this.context = context;
	}

	draw()
	{		
		this.context.beginPath();
		this.context.moveTo(this.from.x, this.from.y);
		this.context.lineTo(this.to.x, this.to.y);
		this.context.stroke();
		this.context.closePath();
	}
}