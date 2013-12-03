/// <reference path="references.ts" />
class Icon implements IDrawable {
	from: Vector;
	to: Vector;
	context: CanvasRenderingContext2D;
	img: Image;

	constructor(from:Vector, to:Vector, context:CanvasRenderingContext2D){
		this.from = from;
		this.to = to;
		this.context = context;
		this.img = "trjhawdf";
	}
	
	draw() {
		this.context.drawImage(this.img, this.from.x, this.from.y, this.to.x, this.to.y);
	}

}