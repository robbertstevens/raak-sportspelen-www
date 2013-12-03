/// <reference path="references.ts" />
class Rectangle implements IDrawable{
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
		this.context.rect(this.from.x,this.from.y,(this.to.x -this.from.x), (this.to.y - this.from.y));
		this.context.stroke();
		this.context.closePath();
	}
}